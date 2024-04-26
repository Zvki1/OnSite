import DocumentsTable from "../components/Documents/DocumentsTable"
import GenralHeader from "../components/GenralHeader"

const Documents = () => {
  return (
    <div className="pl-10 pt-5  w-5/6 h-full">
      <GenralHeader/>
      <DocumentsTable/>

    </div>
  )
}

export default Documents