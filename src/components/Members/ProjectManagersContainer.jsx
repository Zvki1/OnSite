import ProjectManagerElement from "./ProjectManagerElement"


const ProjectManagersContainer = ({projectManagers}) => {
  return (
    <div className=" scroller flex flex-row gap-4  py-2 overflow-x-auto ">
     { projectManagers ? projectManagers.map((projectManager) => (
        <ProjectManagerElement key={projectManager.id} projectManager={projectManager} />
      )) : null  
    }
        
        
    </div>
  )
}

export default ProjectManagersContainer