import Tasks from "../components/Home/Tasks"
import Calendrier from "./Calendrier"
import avatar from "../assets/Avatar.jpg"
const Home = () => {
  return (
    <div className=" pl-10 pt-5  w-5/6 h-full ">
        {/* header */}
        <div className="flex flex-row items-center justify-between  pr-10">
            <h1 className="text-2xl text-[#A06CD5] font-semibold">Hello <span className="font-bold">MR Ahmed</span></h1>
            <div className="flex flex-row gap-2">
            <button type="button" className=" text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Add Task</button>
                <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar"/>
            </div>
        </div>
        <Calendrier />
        <Tasks  />

    </div>
  )
}

export default Home