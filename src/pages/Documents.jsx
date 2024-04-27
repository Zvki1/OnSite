import DocumentsTable from "../components/Documents/DocumentsTable"
import GenralHeader from "../components/GenralHeader"
import SideBar from "../components/SideBar/SideBar"

const Documents = () => {
  return (
    
    <div className="flex w-screen h-screen">
      <SideBar />
      <div className="pl-10 pt-5  w-5/6 h-full">
      <GenralHeader/>
      <DocumentsTable/>
    </div>
    </div>

  )
}

export default Documents