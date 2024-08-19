import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import customFetch from "../../../Utils/customFetch";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/get-schedule/${params.groupId}`
    );

    return data;
  } catch (error) {
    return error;
  }
};

const ViewSchedule = () => {
  const localizer = dayjsLocalizer(dayjs);
  const { schedule } = useLoaderData();

  const newDates = schedule.map((item) => {
    return item.dates;
  });
  const [date] = newDates;

  const newEvent = date.map((item) => ({
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
export default ViewSchedule;
