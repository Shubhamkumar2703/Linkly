import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "./Navbar";
import TextField from "./TextField";
import api from "../api/api";
import { useStoreContext } from "../contextApi/ContextApi.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/login",
        data
      );

      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Welcome back to Linkly 👋");

      reset();
      navigate("/Dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-200 px-4">
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="w-full max-w-md bg-white rounded-xl shadow-md p-8"
        >
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-slate-900">
          Login to Linkly
        </h1>
        <p className="text-center text-sm text-slate-600 mt-2">
             Manage your links and view analytics
        </p>

        {/* Fields */}
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
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            min={6}
            message="Password is required"
            register={register}
            errors={errors}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loader}
          className={`w-full mt-6 py-2.5 rounded-lg font-semibold text-white transition
            ${loader
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"}
          `}
        >
          {loader ? "Signing in..." : "Sign in"}
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Don’t have an account?
          <Link
            to="/register"
            className="ml-1 font-semibold text-indigo-600 hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
