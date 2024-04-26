import avatar from "../../assets/Avatar.jpg"
const ChatHeader = () => {
  return (
    <div className="w-full h-1/6 bg-[#A06CD5] flex items-center pl-4 rounded-lg">
        <div className="flex flex-row items-center gap-2" >
          <img
            className="w-10 h-10 rounded-full"
            src={avatar}
            alt="Rounded avatar"
          />
          <h3 className=" font-bold text-[#F4F4F4]">Reguieg Zakaria</h3>
        </div>
    </div>
  )
}

export default ChatHeader