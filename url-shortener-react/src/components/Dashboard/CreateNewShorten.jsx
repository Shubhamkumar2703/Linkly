import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { Tooltip } from "@mui/material";
import toast from "react-hot-toast";

import api from "../../api/api";
import TextField from "../TextField";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (formData) => {
    setLoading(true);

    try {
      // 🚀 NO MANUAL HEADERS HERE
      const { data } = await api.post("/api/urls/shorten", formData);

      const shortLink = `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${data.shortUrl}`;

      await navigator.clipboard.writeText(shortLink);

      toast.success("Short link created & copied 🎉", {
        position: "bottom-center",
      });

      await refetch?.();
      reset();
      setOpen(false);
    } catch (error) {
      console.error("Create short error:", error);
      toast.error("Failed to create short link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6"
      >
        {!loading && (
          <Tooltip title="Close">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-slate-600 hover:text-slate-900"
            >
              <RxCross2 className="text-2xl" />
            </button>
          </Tooltip>
        )}

        <h2 className="text-center text-2xl font-bold text-slate-900">
          Create a short link
        </h2>

        <p className="text-center text-sm text-slate-600 mt-1">
          Paste a long URL to generate a clean short link
        </p>

        <div className="mt-6">
          <TextField
            label="Destination URL"
            id="originalUrl"
            type="url"
            placeholder="https://example.com"
            required
            message="URL is required"
            register={register}
            errors={errors}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-6 py-2.5 rounded-lg font-semibold text-white transition
            ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >
          {loading ? "Creating..." : "Create short link"}
        </button>
      </form>
    </div>
  );
};

export default CreateNewShorten;
