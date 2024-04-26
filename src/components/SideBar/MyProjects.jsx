import { SquarePlus } from "lucide-react";
import MyProjectsContainer from "./MyProjectsContainer";

const MyProjects = () => {
  return (
    <div className="w-full flex flex-col items-start  ">
      <div className="flex w-full  gap-10 pl-4 flex-row space-between items-center">
        <h3 className="text-[#6247AA] font-normal">My Projects</h3>
        <button>
          <SquarePlus size={20} />
        </button>
      </div>
      <MyProjectsContainer />
    </div>
  );
};

export default MyProjects;
