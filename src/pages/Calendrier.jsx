/* eslint-disable react/prop-types */
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MOCK_EVENTS } from "../event";
import { useEffect,useState } from "react";
const Calendrier = ({tasks}) => {
  const [tasksForCalendar, setTasksForCalendar] = useState([])
  useEffect(() => {
    const newTasks = [];

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  const newTask = {
    id: task.id,
    title:task.name,
    start: task.start, // Example start date
    end: task.deadline, // Example end date
    description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    color:task.color
  };
  newTasks.push(newTask);
}
setTasksForCalendar(newTasks);
}, [tasks])
  const localizer = momentLocalizer(moment);
  // replace this with the tasks from the server
  const events = tasksForCalendar.map((event) => ({
    title: event.title,
    start: new Date(event.start),
    end: new Date(event.end),
    color: event.color,
  }));
  return (
    <>
      <Calendar className="h-3/6"
        localizer={localizer}
        startAccessor={"start"}
        events={events}
        endAccessor={"end"}
       
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor: event.color,
            },
          };
        }}
        onSelectEvent={(event) => {
          alert(event.title);
        }}
        views={[Views.MONTH, Views.WEEK,Views.DAY]}
      />
    </>
  );
};

export default Calendrier;
