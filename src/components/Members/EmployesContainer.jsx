
import ProjectManagerElement from "./ProjectManagerElement"
import ProjectManagerElementSkeleton from "./ProjectManagerElementSkeleton"
import EmployeElement from "./EmployeElement"

const EmployesContainer = ({employes}) => {
  
  return (
    <div className=" scroller flex flex-row gap-4  py-2 overflow-x-auto ">
      
        {employes ? (
          employes.map((employe) => (
            <EmployeElement key={employe.id} employe={employe}/>
          ))
        ) : (
          <ProjectManagerElementSkeleton />
        )}
        
      
        
        
    </div>
  )
}

export default EmployesContainer