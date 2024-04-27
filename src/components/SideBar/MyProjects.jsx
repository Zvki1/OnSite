import { SquarePlus } from "lucide-react";
import MyProjectsContainer from "./MyProjectsContainer";
import { useEffect ,useState} from "react";
import axios from "axios";

const MyProjects = ({setShowModal}) => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    axios.get('http://192.168.43.40:8000/api/projects', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(
      res => {
        setProjects(res.data)
      }
    )
    .catch(err => console.log(err))
  }, [])
  const handleClick = () => {
    setShowModal(true)
  }
  return (
    <div className="w-full flex flex-col items-start  ">
      <div className="flex w-full  gap-10 pl-4 flex-row space-between items-center">
        <h3 className="text-[#6247AA] font-normal">My Projects</h3>
        <button onClick={handleClick}>
          <SquarePlus size={20} />
        </button>
      </div>
      <MyProjectsContainer projects={projects} />
    </div>
  );
};

export default MyProjects;
