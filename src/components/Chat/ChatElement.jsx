import { Link } from "react-router-dom";
import avatar from "../../assets/Avatar.jpg";
const ChatElement = () => {
  return (
    <Link className="flex flex-col gap-1 pl-3 pt-3 pr-2 bg-[#DADCE0] border border-[#DADCE0] ">
 <div className="flex flex-row justify-between items-center">
        {/* right profile infos */}
        <div className="flex flex-row items-center gap-2" >
          <img
            className="w-10 h-10 rounded-full"
            src={avatar}
            alt="Rounded avatar"
          />
          <h3 className=" font-bold">Reguieg Zakaria</h3>
        </div>
        <p className="text-[#9747FF] font-medium">12:03</p>
      </div>
      <p className="py-1 text-black font-normal">you:hello sel3a jet</p>
    </Link>

  );
};

export default ChatElement;
