import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { useLoaderData } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import dayjs from "dayjs";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/dash/view-schedule");
    return data;
  } catch (error) {
    return error;
  }
};

const ViewDashSchedule = () => {
  const localizer = dayjsLocalizer(dayjs);
  const { schedule } = useLoaderData();
  const newEvent = schedule.map((item) => ({
    start: new Date(dayjs(item.start_time)),
    end: new Date(dayjs(item.end_time)),
    title: item.title,
  }));

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={newEvent}
        style={{ height: 500, marginTop: "8rem" }}
      />
    </div>
  );
};
export default ViewDashSchedule;
