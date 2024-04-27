import { useState,useEffect } from "react";
import GenralHeader from "../components/GenralHeader";
import EmployesContainer from "../components/Members/EmployesContainer";
import ProjectManagersContainer from "../components/Members/ProjectManagersContainer";
import SideBar from "../components/SideBar/SideBar";
import axios from "axios";

const Members = () => {
const [employes, setEmployes] = useState([])
const [projectManagers, setProjectManagers] = useState([])
useEffect(() => {
  axios.get('http://192.168.43.40:8000/api/users/employee', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  .then(
    res => {
      setEmployes(res.data)
      console.log(res.data);
    })
  .catch(err => {
    console.log(err)
  })

  axios.get('http://192.168.43.40:8000/api/users/manager', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  .then(
    res => {
      setProjectManagers(res.data)
      console.log(res.data);
    })
  .catch(err => {
    console.log(err)
  })
}, [])
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <div className=" pl-10 pt-5  w-5/6 h-full ">
      <GenralHeader />
      <div className="pt-2 w-full space-y-2">
        <h2 className="text-[#CBC5D2] font-medium  text-2xl">
          Project Managers
        </h2>
        <ProjectManagersContainer projectManagers={projectManagers} />
        <h2 className="text-[#CBC5D2] font-medium  text-2xl">
          Employes
        </h2>
        <EmployesContainer employes={employes}/>
        
      </div>
    </div>
    </div>
  );
};

export default Members;
