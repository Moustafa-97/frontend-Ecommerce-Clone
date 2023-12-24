import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const [showP, setShowP] = useState(false);
  const [showCP, setShowCP] = useState(false);
  const [userSignUp, setUserSignUp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignUp((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    } = userSignUp;
    if (firstname && lastname && email && password && confirmpassword) {
      if (userSignUp.password === userSignUp.confirmpassword) {
        const postData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userSignUp),
          }
        );
        const backData = await postData.json();
        if (backData.alert) {
          toast(`${backData.message}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            navigate("/login");
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
        console.log(backData);
      } else {
        toast.warn("password do not match", {
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
            <label htmlFor="firstname">First name</label>
            <input
              className=" w-44"
              id="firstname"
              type="firstname"
              name="firstname"
              onChange={handleChange}
            />
            <label htmlFor="lastname">Last name</label>
            <input
              className=" w-44"
              id="lastname"
              type="lastname"
              name="lastname"
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              className=" w-44"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
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
            <label htmlFor="confirmpassword">Confirm password</label>
            <div className="w-44 bg-white flex items-center justify-center">
              <input
                className="w-40 focus:outline-none"
                id="confirmpassword"
                type={showCP ? "text" : "password"}
                name="confirmpassword"
                onChange={handleChange}
              />
              <div
                className="mr-1 cursor-pointer"
                onClick={() => setShowCP(!showCP)}
              >
                {showCP ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <button className="bg-yellow-300 hover:bg-yellow-200 shadow-lg rounded-lg px-3 py-2">
              Singup
            </button>
          </div>
        </form>
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
