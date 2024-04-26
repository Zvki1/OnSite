import ProjectManagerElement from "./ProjectManagerElement"


const ProjectManagersContainer = () => {
  return (
    <div className=" scroller flex flex-row gap-4  py-2 overflow-x-auto ">
        <ProjectManagerElement />
        <ProjectManagerElement />
        <ProjectManagerElement />
        <ProjectManagerElement />
        <ProjectManagerElement />
        <ProjectManagerElement />   
        
        
    </div>
  )
}

export default ProjectManagersContainer