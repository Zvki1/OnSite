import GenralHeader from "../GenralHeader"
import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import MessagesContainer from "./MessagesContainer"

const PrivateChat = () => {
  return (
    <div className="w-8/12 border-2 rounded-lg ">
        <ChatHeader/>
        <MessagesContainer/>
        <MessageInput/>
    </div>
  )
}

export default PrivateChat