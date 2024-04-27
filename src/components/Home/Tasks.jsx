/* eslint-disable react/prop-types */
import { UserCheck, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const Tasks = ({tasks}) => {
  const [sortedTasks, setSortedTasks] = useState([]);
  const sortByDate = (a, b) => {
    
    const dateA = new Date(a.deadline);
    const dateB = new Date(b.deadline);
    
    return -(dateA - dateB);
  };
  
  useEffect(() => {
    const temp= tasks.sort(sortByDate);
    setSortedTasks(temp);
  }, [tasks]);
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
          {sortedTasks ? (
            sortedTasks.map((task) => (
              <tr key={task.id}>
              <th>{task.id}</th>
              <td className="flex flex-col ">
                <td className="p-0 text-[#A06CD5] font-bold text-lg">
                  {task.name}
                </td>
                <td className="p-0 text-green-500">Project Name</td>
              </td>
              <td>
                <td className="p-0">
                  <UserCheck size={20} color="#6247AA" />
                </td>
                <td className="p-0 text-[#CBC5D2] font-normal">
                  Assigned to:{" "}
                  <span className="text-[#080708] font-medium"> {task.user.name}</span>
                </td>
              </td>
              <td>
                <td className="p-0">
                  <CalendarDays size={20} color="#6247AA" />
                </td>
                <td className="p-0 text-[#080708] font-medium">{task.deadline}</td>
              </td>
              <td>
                <span className="w-2 h-2 me-1 p-1 px-2 bg-orange-500 rounded-full">
                  {task.status}
                </span>
              </td>
            </tr>
            ))
          ) : (
            <Loading />
          )
        }
        {tasks.length === 0 && (
          <tr>
            <td colSpan="5" className="text-center">
              No tasks available check other projects
            </td>
          </tr>
        )}
        
          
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
