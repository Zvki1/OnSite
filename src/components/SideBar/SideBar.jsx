import { useState } from "react"
import LOGO from "../../assets/LOGOwithTypo.svg"
import CreateProject from "./CreateProject"
import MyProjects from "./MyProjects"
import Navlinks from "./Navlinks"

const SideBar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <h1 className="w-1/6 h-screen overflow-y-hidden  flex flex-col items-center">
        <div className="pt-5 px-4">
            <img src={LOGO} width={152} alt="logo " />
        </div>
        <Navlinks />
        <hr className="w-2/3 h-1 mx-auto my-4 bg-[#E6D7F4] border-0 rounded md:my-3 "></hr>
        <MyProjects setShowModal={setShowModal}/>
       { showModal && <CreateProject setShowModal={setShowModal}/>}
    </h1>
  )
}

export default SideBar