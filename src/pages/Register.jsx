import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/LogIn/Header";

import HeroText from "../components/LogIn/HeroText";
import DesktopHeading from "../components/LogIn/DekstopHeading";

import Cta from "../components/LogIn/Cta"
import { User,Mail } from 'lucide-react';
import { SquareAsterisk } from 'lucide-react';


const Register = () => {
  // const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!username.trim()) {
      errors.username = "Username is required";
    } else if (username.length < 6) {
      errors.username = "username must be at least 6 characters long";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    // else if the password containt numbers 
    else if (!/\d/.test(password)) {
      errors.password = "Password must contain at least one number";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };




    const handleSubmit = (event) => {
      event.preventDefault();
     if (validateForm()) {
    
      axios.post('http://localhost:8000/register', { email, username, password })
      .then(() => {
          alert('Registration Successful')
          setEmail('')
          setUsername('')
          setPassword('')
        //   fetchUsers();
          navigate('/login')
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.log("Email is already in use. Please use a different email.");
          errors.email = "Email is already in use.";
          setErrors(errors);
        } else {
          console.log("Unable to register user. Please try again later.",error);
        }
      })
    }
  }
  return (
    < >
    <div className="flex flex-row lg:items-center">
   <DesktopHeading/>
    <div className="w-full lg:w-3/5  flex flex-col items-start lg:justify-center lg:items-center px-5  lg:rounded-lg lg:shadow-[0px_4px_8px_-0px_rgba(94,93,93,0.15)] lg:mx-20 lg:py-[24px] lg:px-12 lg:border-[2px]">
      <Header  />
      <HeroText
        hero="Register Employe"
        paragraph="Create a new account"
        p2=""
      />

      <form className="w-full flex flex-col pt-16 lg:pt-8 gap-6" onSubmit={handleSubmit}  >
        {/* email */}
        {errors.email && <p className="text-red-500 pt-1 -mb-[17px]">{errors.email}</p>}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Mail size={20} strokeWidth={2} color="#6b7280" className="w-4 h-4 text-gray-500 "/>
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
            placeholder="Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        {/* username */}
        {errors.username && <p className="text-red-500 pt-1 -mb-[17px]">{errors.username}</p>}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <User size={20} strokeWidth={3}  color="#6b7280"/>
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
            placeholder="Full name"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
          />
        </div>
        {/* password */}
        {errors.password && <p className="text-red-500 pt-1 -mb-[17px]">{errors.password}</p>}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <SquareAsterisk size={20} strokeWidth={2}  color="#6b7280" />
          </div>
          <input
            type="password"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
            placeholder="Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        {/* button */}
        <button type="submit" className="text-white bg-[#112377] hover:bg-blue-800   rounded-lg text-2xl font-semibold  py-3  ">Sign Up</button>
      </form>
      <Cta paragraph="Go to :" cta="Home"/>
    </div>
    </div>
    </>
  );
};

export default Register;