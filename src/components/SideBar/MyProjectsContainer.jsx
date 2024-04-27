/* eslint-disable react/prop-types */
import { useEffect } from "react"
import MyProject from "./MyProject"


const MyProjectsContainer = ({projects}) => {
  useEffect(() => {
    console.log(projects)
  }, [projects])
  return (
    <div className="flex flex-col items-start w-full gap-1 pt-2 h-4/5 overflow-y-auto">
     {Array.isArray(projects.data) && projects.data.map(project => <MyProject key={project.id} project={project} />)}

    </div>
  )
}

export default MyProjectsContainer