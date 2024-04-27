import MessagesList from "../components/Chat/MessagesList"
import PrivateChat from "../components/Chat/PrivateChat"
import GenralHeader from "../components/GenralHeader"
import SideBar from "../components/SideBar/SideBar"

const Chat = () => {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <div className="pl-10 pt-5  w-5/6 h-full">
      <GenralHeader />
      <div className=" flex flex-row h-5/6  gap-2 pt-4">
        <MessagesList/>
        <PrivateChat/>
      </div>
    </div>
    </div>
  )
}

export default Chat