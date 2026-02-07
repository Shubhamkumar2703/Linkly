import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "./Navbar";
import TextField from "./TextField";
import api from "../api/api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      await api.post("/api/auth/public/register", data);
      reset();
      toast.success("Account created successfully 🎉");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-200 px-4 ">
        <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8"
      >
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-indigo-900">
            Register Here
        </h1>
        <p className="text-center text-sm text-slate-600 mt-2">
          Create your Linkly account
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <TextField
            label="Username"
            id="username"
            type="text"
            placeholder="Enter your username"
            required
            message="Username is required"
            register={register}
            errors={errors}
          />

          <TextField
            label="Email address"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            message="Email is required"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            id="password"
            type="password"
            placeholder="Create a password"
            required
            min={6}
            message="Password is required"
            register={register}
            errors={errors}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loader}
          className={`w-full mt-6 py-2.5 rounded-lg font-semibold text-white transition
            ${loader
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"}
          `}
        >
          {loader ? "Creating account..." : "Sign up"}
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 font-semibold text-indigo-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default RegisterPage;
