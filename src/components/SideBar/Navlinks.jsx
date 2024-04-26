import { NavLink } from "react-router-dom"
import { LayoutDashboard,MessageCircleMore ,UserRound ,Files  } from 'lucide-react';

const Navlinks = () => {
    const links = [
    { id: 1,icon:LayoutDashboard, name: "Home", path: "/home" },
    { id: 2,icon:MessageCircleMore, name: "Chat", path: "/chat" },
    { id: 3,icon:UserRound, name: "Members", path: "/members" },
    { id: 4,icon:Files, name: "Documents", path: "/documents" },
    ]
  return (
    <div className="flex flex-col items-start w-full gap-4 pt-11">
        {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            isActive ? 
            "flex  flex-row items-center gap-1 w-full font-medium pl-4 py-2  text-[#6247AA] bg-[#E6D7F43B]" :
             "flex flex-row items-center gap-1 w-full font-medium  pl-4 py-2 text-[#CBC5D2]"
  }
        >   
            {<link.icon  />}
            {link.name}
        </NavLink>
        ))}
        
    </div>
  )
}

export default Navlinks