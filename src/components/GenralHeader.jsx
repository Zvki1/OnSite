
import avatar from "../assets/Avatar.jpg"
const GenralHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between pr-10">
      <h1 className="text-2xl text-[#A06CD5] font-semibold">
        Hello <span className="font-bold">MR Ahmed</span>
      </h1>
      <div className="flex flex-row gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={avatar}
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};

export default GenralHeader;
