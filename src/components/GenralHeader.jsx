
import { useState,useEffect } from "react";
import avatar from "../assets/Avatar.jpg"
const GenralHeader = () => {
  const [name,setName] = useState("Ahmed")
  useEffect (()=>{
    console.log("Component Mounted")
   if(localStorage.getItem("token") === null){
     window.location.href = "/login"
   }else{
    setName(JSON.parse(localStorage.getItem("user")).name)
   }
  },[])
  return (
    <div className="flex flex-row items-center justify-between pr-10">
      <h1 className="text-2xl text-[#A06CD5] font-semibold">
        Hello
        <span className="font-bold pl-2">{name !== null ? name : "Ahmed"}</span>
        
      </h1>
      <div className="flex flex-row gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={avatar}
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};

export default GenralHeader;
