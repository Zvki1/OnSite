import { UserCheck, CalendarDays } from "lucide-react";
const Tasks = () => {
  return (
    <div className="overflow-x-auto scroller h-2/6">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Assigned to:</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>2</th>
            <td className="flex flex-col ">
              <td className="p-0 text-[#A06CD5] font-bold text-lg">
                Task Name
              </td>
              <td className="p-0 text-green-500">Project Name</td>
            </td>
            <td>
              <td className="p-0">
                <UserCheck size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#CBC5D2] font-normal">
                Assigned to:{" "}
                <span className="text-[#080708] font-medium"> employe</span>
              </td>
            </td>
            <td>
              <td className="p-0">
                <CalendarDays size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#080708] font-medium"> 05 Mar 24</td>
            </td>
            <td>
              <span className="w-2 h-2 me-1 p-1 px-2 bg-green-500 rounded-full">
                Done
              </span>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>1</th>
            <td className="flex flex-col ">
              <td className="p-0 text-[#A06CD5] font-bold text-lg">
                Task Name
              </td>
              <td className="p-0 text-green-500">Project Name</td>
            </td>
            <td>
              <td className="p-0">
                <UserCheck size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#CBC5D2] font-normal">
                Assigned to:{" "}
                <span className="text-[#080708] font-medium"> employe</span>
              </td>
            </td>
            <td>
              <td className="p-0">
                <CalendarDays size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#080708] font-medium"> 05 Mar 24</td>
            </td>
            <td>
              <span className="w-2 h-2 me-1 p-1 px-2 bg-green-500 rounded-full">
                Done
              </span>
            </td>
          </tr>
           {/* row 3 */}
           <tr>
            <th>3</th>
            <td className="flex flex-col ">
              <td className="p-0 text-[#A06CD5] font-bold text-lg">
                Task Name
              </td>
              <td className="p-0 text-green-500">Project Name</td>
            </td>
            <td>
              <td className="p-0">
                <UserCheck size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#CBC5D2] font-normal">
                Assigned to:{" "}
                <span className="text-[#080708] font-medium"> employe</span>
              </td>
            </td>
            <td>
              <td className="p-0">
                <CalendarDays size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#080708] font-medium"> 05 Mar 24</td>
            </td>
            <td>
              <span className="w-2 h-2 me-1 p-1 px-2 bg-green-500 rounded-full">
                Done
              </span>
            </td>
          </tr>
           {/* row 4 */}
           <tr>
            <th>4</th>
            <td className="flex flex-col ">
              <td className="p-0 text-[#A06CD5] font-bold text-lg">
                Task Name
              </td>
              <td className="p-0 text-green-500">Project Name</td>
            </td>
            <td>
              <td className="p-0">
                <UserCheck size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#CBC5D2] font-normal">
                Assigned to:{" "}
                <span className="text-[#080708] font-medium"> employe</span>
              </td>
            </td>
            <td>
              <td className="p-0">
                <CalendarDays size={20} color="#6247AA" />
              </td>
              <td className="p-0 text-[#080708] font-medium"> 05 Mar 24</td>
            </td>
            <td>
              <span className="w-2 h-2 me-1 p-1 px-2 bg-green-500 rounded-full">
                Done
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
