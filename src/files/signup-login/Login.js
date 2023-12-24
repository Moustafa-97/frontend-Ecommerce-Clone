import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignIn((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const [showP, setShowP] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userSignIn;
    if (email && password) {
      const postData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userSignIn),
        }
      );
      const backData = await postData.json();
      if (backData.alert) {
        toast(`${backData.message}`, {
          position: "top-center",
          autoClose: 1700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        localStorage.setItem("ThisUser", JSON.stringify(backData.userData));
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.warn(`${backData.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.warn("Please fill all fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center m-auto h-[500px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center m-auto gap-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={userSignIn.email}
            />
            <label htmlFor="password">Password</label>
            <div className="w-44 bg-white flex items-center justify-center">
              <input
                className="w-40 focus:outline-none"
                id="password"
                type={showP ? "text" : "password"}
                name="password"
                onChange={handleChange}
              />
              <div
                className="mr-1 cursor-pointer"
                onClick={() => setShowP(!showP)}
              >
                {showP ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <button className="bg-yellow-300 hover:bg-yellow-200 shadow-lg rounded-lg px-3 py-2">
              Singin
            </button>
          </div>
        </form>
        <p className="mt-10 text-xs">
          Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className=" text-sm cursor-pointer text-yellow-300"
          >
            Signup
          </span>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
