import Wrapper from "../../../Wrappers/UserGroup/Schedule/deleteSchedule";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";
import customFetch from "../../../Utils/customFetch";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/get-schedule/${params.groupId}`
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteSchedule = () => {
  const navigation = useNavigation();
  const { schedule } = useLoaderData();
  const [dataArr] = schedule;
  const { dates } = dataArr;
  const [index, setIndex] = useState(0);
  const [oldDates] = useState(dates);

  if (oldDates.length === 0) {
    return <h1>no dates</h1>;
  }
  const isSubmitting = navigation.state === "submitting";
  const { _id, title, start_time, end_time } = oldDates[index];
  const nextBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > oldDates.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const prevBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return oldDates.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <Wrapper>
      <div className="title">
        <h2>
          delete<span>dates</span>
        </h2>
      </div>
      <div className="title-underline"></div>
      <article className="article">
        <h1>{title}</h1>
        <p>{start_time}</p>
        <p>{end_time}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevBtn}>
            <FaChevronCircleLeft />
          </button>
          <Form method="post" action={`../delete-date/${_id}`}>
            <button
              type="submit"
              className="delete-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "deleting date..." : "delete date"}
            </button>
          </Form>
          <button type="button" className="next-btn" onClick={nextBtn}>
            <FaChevronCircleRight />
          </button>
        </div>
      </article>
    </Wrapper>
  );
};
export default DeleteSchedule;
