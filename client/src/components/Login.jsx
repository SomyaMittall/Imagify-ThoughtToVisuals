import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", { email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem("token", data.token)
          setShowLogin(false)

        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", { name, email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem("token", data.token)
          setShowLogin(false)

        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)
    }

  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/60 flex justify-center items-center">
      <form onSubmit={onSubmitHandler}
        className="relative w-[90%] max-w-md p-10 rounded-2xl text-slate-200 
                   bg-black/70 border border-gradient-to-r from-purple-500 to-blue-500
                   shadow-xl shadow-black/50"
      >
        {/* Title */}
        <h1 className="text-center text-3xl font-semibold text-white drop-shadow-md">
          {state}
        </h1>
        <p className="text-sm text-gray-400 text-center mt-1">
          Welcome back! Please sign in to continue
        </p>

        {/* Full Name (only for Sign Up) */}
        {state !== "Login" && (
          <div className="mt-6 border border-gray-600/40 bg-gray-800/40 px-6 py-3 flex items-center gap-3 rounded-full focus-within:border-purple-500/70 transition">
            <img src={assets.user_icon} alt="" className="w-5 h-5 opacity-80" />
            <input onChange={e => setName(e.target.value)} value={name}
              type="text"
              className="bg-transparent flex-1 outline-none text-sm text-white placeholder-gray-400"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="mt-4 border border-gray-600/40 bg-gray-800/40 px-6 py-3 flex items-center gap-3 rounded-full focus-within:border-purple-500/70 transition">
          <img src={assets.email_icon} alt="" className="w-5 h-5 opacity-80" />
          <input onChange={e => setEmail(e.target.value)} value={email}
            type="email"
            className="bg-transparent flex-1 outline-none text-sm text-white placeholder-gray-400"
            placeholder="Email Id"
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4 border border-gray-600/40 bg-gray-800/40 px-6 py-3 flex items-center gap-3 rounded-full focus-within:border-purple-500/70 transition">
          <img src={assets.lock_icon} alt="" className="w-5 h-5 opacity-80" />
          <input onChange={e => setPassword(e.target.value)} value={password}
            type="password"
            className="bg-transparent flex-1 outline-none text-sm text-white placeholder-gray-400"
            placeholder="Password"
            required
          />
        </div>

        {/* Forgot Password */}
        <p className="text-sm text-purple-400 my-4 cursor-pointer hover:underline text-right">
          Forgot Password?
        </p>

        {/* Button */}
        <button
          className="w-full py-3 rounded-full font-medium 
                     bg-gradient-to-r from-purple-600 to-blue-500 
                     hover:from-blue-500 hover:to-purple-600 
                     text-white shadow-lg shadow-black/40 
                     transition-transform hover:scale-105"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {/* Toggle */}
        {state === "Login" ? (
          <p className="mt-6 text-center text-sm text-gray-300">
            Don&apos;t have an account?{" "}
            <span
              className="text-purple-400 cursor-pointer hover:underline"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-6 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <span
              className="text-purple-400 cursor-pointer hover:underline"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        {/* Close */}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer w-5 h-5 opacity-80 hover:opacity-100 transition"
        />
      </form>
    </div>
  );
};

export default Login;
