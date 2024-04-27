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
  const [tasks, setTasks] = useState(
    [ {
      id: 1,
      title: "Event 1",
      start: "2024-04-26",
      end: "2024-04-26",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      color: "#C97D60",
    },
    {
      id: 2,
      title: "Event 2",
      start: "2023-05-15T13:30:02",
      end: "2023-05-15T17:30:20",
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      color: "green",
    }]
  )
  const handleClick = () => {
    setShowModal(true)
    console.log("am clicked");
  }
  useEffect(() => {
    axios.get('http://192.168.81.208:8000/api/user', {
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
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data))
        
      }
    )
    .catch(err => console.log(err))
  }, [])
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
       <Tasks  />
        {showModal &&  <PopUp showModal={showModal} setShowModal={setShowModal}/>}
   </div>
    ) : (
      <Loading />
    )}
    </div>
  )
}

export default Home