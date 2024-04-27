import GenralHeader from "../components/GenralHeader";
import EmployesContainer from "../components/Members/EmployesContainer";
import ProjectManagersContainer from "../components/Members/ProjectManagersContainer";
import SideBar from "../components/SideBar/SideBar";

const Members = () => {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <div className=" pl-10 pt-5  w-5/6 h-full ">
      <GenralHeader />
      <div className="pt-2 w-full space-y-2">
        <h2 className="text-[#CBC5D2] font-medium  text-2xl">
          Project Managers
        </h2>
        <ProjectManagersContainer />
        <h2 className="text-[#CBC5D2] font-medium  text-2xl">
          Employes
        </h2>
        <ProjectManagersContainer />
        {/* <EmployesContainer/> */}
      </div>
    </div>
    </div>
  );
};

export default Members;
