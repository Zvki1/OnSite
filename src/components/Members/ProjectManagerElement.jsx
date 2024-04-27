import avatar from "../../assets/Avatar.jpg"
const ProjectManagerElement = ({projectManager}) => {
  console.log("projectmanager",projectManager.created_at);
  
  return (
    <div className=" min-w-60 p-4 border-2  border-[#CBC5D2] rounded-md space-y-4"> 
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
        <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar"/>
          <h3 className="text-[#A06CD5] font-medium text-lg">{projectManager?.name}  </h3>
        </div>
        <div className="radial-progress  text-[#6247AA]" style={{"--value":"40","--size":"2rem"}} role="progressbar"></div>
      </div>


      <div className="flex flex-row justify-between">
        <div >
            <h3 className="text-[#CBC5D2] text-sm font-medium    ">Project:</h3>
            <h3 className="text-[#080708] font-semibold">Frist project</h3>
        </div>
        <div >
            <h3 className="text-[#CBC5D2] text-sm font-medium    ">Deadline :</h3>
            <h3 className="text-[#080708] font-semibold">{projectManager.created_at.split("T")[0]}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagerElement;
