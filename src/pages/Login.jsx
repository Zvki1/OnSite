import { SquareAsterisk, Mail, Eye, EyeOff } from "lucide-react";
import DesktopHeading from "../components/LogIn/DekstopHeading";
import Header from "../components/LogIn/Header";
import HeroText from "../components/LogIn/HeroText";
import Cta from "../components/LogIn/Cta";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ ...errors, email: "Email is required" });
    } else {
      setErrors({ ...errors, email: "" });
    }
    if (!password) {
      setErrors({ ...errors, password: "Password is required" });
    } else {
      setErrors({ ...errors, password: "" });
    }
    if (email && password) {
      // console.log('login successful');
      axios
        .post(
          "http://192.168.43.40:8000/api/login",
          { email, password },
          
        )
        .then((res) => {
          console.log(res.data.access_token);
          localStorage.setItem("token", res.data.access_token);
          navigate('/home')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="flex flex-row lg:items-center">
      <DesktopHeading />
      <div className="w-full lg:w-3/5 h-full flex flex-col items-start lg:justify-center lg:items-center px-5 pt-16 lg:rounded-lg lg:shadow-[0px_4px_8px_-0px_rgba(94,93,93,0.15)] lg:mx-20 lg:py-[24px] lg:px-12 lg:border-[2px]">
        <Header />
        <HeroText
          hero="Log In"
          paragraph="Access to collaborate with "
          p2="your teammates."
        />

        <form
          className="w-full flex flex-col pt-16 lg:pt-8 gap-6"
          onSubmit={handleLogin}
        >
          {/* email */}
          {errors.email && (
            <p className="text-red-500 pt-1 -mb-[17px]">{errors.email}</p>
          )}
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Mail
                size={20}
                strokeWidth={2}
                color="#6b7280"
                className="w-4 h-4 text-gray-500 "
              />
              {/* <img src={Email} alt="emailicon"   /> */}
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* password */}
          {errors.password && (
            <p className="text-red-500 pt-1 -mb-[17px]">{errors.password}</p>
          )}
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <SquareAsterisk size={20} strokeWidth={2} color="#6b7280" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="button" className="relative ">
            {!showPassword ? (
              <Eye
                size={20}
                strokeWidth={2}
                color="#6b7280"
                className="absolute -top-16 right-3"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeOff
                size={20}
                strokeWidth={2}
                color="#6b7280"
                className="absolute -top-16 right-3"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </button>
          {/* button */}
          <button
            type="submit"
            className="text-white bg-[#112377] hover:bg-blue-800   rounded-lg text-2xl font-semibold  py-3  "
          >
            Login
          </button>
        </form>
        <Cta paragraph="Don't have an account?" cta="Sign up" />
      </div>
    </div>
  );
};

export default Login;
