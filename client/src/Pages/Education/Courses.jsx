import { CourseSection, VideoFile } from "../../Components/index";
import Wrapper from "../../Wrappers/Education/course";
import customFetch from "../../Utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/education/course/${params.courseId}`
    );
    return data;
  } catch (error) {
    return toast.error(error?.response?.data?.msg);
  }
};

const Courses = () => {
  const { course } = useLoaderData();
  const [isVideo, setIsVideo] = useState(null);
  const newSection = course.map(({ newSection }) => newSection);

  return (
    <Wrapper>
      <div className="video">
        <VideoFile video={isVideo} />
      </div>
      <div className="section">
        <CourseSection section={newSection} videoFunc={setIsVideo} />
      </div>
    </Wrapper>
  );
};
export default Courses;
