import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MOCK_EVENTS } from "../event";
const Calendrier = ({tasks}) => {
  const localizer = momentLocalizer(moment);
  // replace this with the tasks from the server
  const events = MOCK_EVENTS.map((event) => ({
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
        views={[Views.MONTH, Views.WEEK]}
      />
    </>
  );
};

export default Calendrier;
