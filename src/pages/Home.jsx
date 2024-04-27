import Tasks from "../components/Home/Tasks"
import Calendrier from "./Calendrier"
import avatar from "../assets/Avatar.jpg"
import SideBar from "../components/SideBar/SideBar"
import { Link } from "react-router-dom"
import { useEffect ,useState} from "react"
import axios from "axios"
import Loading from "../components/Loading"
import PopUp from "../components/Home/PopUp"

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [tasks, setTasks] = useState([])
  const [projectId, setProjectId] = useState()
  const handleClick = () => {
    setShowModal(true)
    console.log("am clicked");
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pId = urlParams.get("project");
    console.log("project id",pId);
    setProjectId(pId)
    
    // getting tasks acording to the project id
    axios.get(`http://192.168.43.40:8000/api/projects/${projectId}/tasks`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
    .then((res)=>{
      console.log("tasks",res.data.data);
      setTasks(res.data.data)
     
      
    })
    .catch((err)=>{
      console.log(err);
    })
    
    axios.get('http://192.168.43.40:8000/api/user', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(
      res => {
        setName(res.data.name)
        setIsAdmin(res.data.role)
        console.log("user data",res.data);
        localStorage.setItem("user", JSON.stringify(res.data))
        
      }
    )
    .catch(err => console.log(err))

  }, [projectId])

  return (
    <div className="flex w-screen h-screen">
      <SideBar />
   {name ? ( 
       <div className=" pl-10 pt-5  w-5/6 h-full ">
       {/* header */}
       <div className="flex flex-row items-center justify-between  pr-10">
           <h1 className="text-2xl text-[#A06CD5] font-semibold">Hello <span className="font-bold">{name}</span></h1>
           <div className="flex flex-row gap-2">
           <button type="button" onClick={handleClick}  className=" text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Add Task</button>
           {isAdmin && 
           <Link to={"/addemploye"} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
             Add Employe
           </Link>}
               <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar"/>
           </div>
       </div>
       <Calendrier tasks={tasks} />
       <Tasks tasks={tasks} />
        {showModal &&  <PopUp showModal={showModal} setShowModal={setShowModal}/>}
   </div>
    ) : (
      <Loading />
    )}
    </div>
  )
}

export default Home