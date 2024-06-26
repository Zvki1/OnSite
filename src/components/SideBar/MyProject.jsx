/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"




const MyProject = ({project}) => {
  const navigate =useNavigate()
  useEffect(() => {
    console.log("project", project)
  }, [project])
  const handleClick = () => {
   navigate(`/home?project=${project.id}`)
   window.location.reload()
  }
  return (
    <NavLink
          // iwant dynamic link
          to={`/home?project=${project.id}`}
          onClick={handleClick}
          className={({ isActive }) =>
            isActive ? 
            "flex  flex-row items-center gap-1 w-full font-medium pl-4 py-2  text-[#CBC5D2] bg-[#E6D7F43B]" :
             "flex flex-row items-center gap-1 w-full font-medium  pl-4 py-2 text-[#E6D7F4]"
  }
        >   
           <span className="  size-3 bg-green-400    rounded-full"></span>
            {project.name}
        </NavLink>
  )
}

export default MyProject