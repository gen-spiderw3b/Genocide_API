import Wrapper from "../../Wrappers/Education/upload";
import { COURSES } from "../../../../Utils/Constants/constants";
import { SelectOption } from "../../Components/index";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";

const Upload = () => {
  const [iscourse, setIsCourse] = useState(true);
  const [isSection, setIsSection] = useState(false);
  const [isSrc, setIsSrc] = useState(false);
  const [fullCourse, setFullCourse] = useState(false);
  const [courseSelection, setCourseSelection] = useState(COURSES.MATH);
  const [sectionSelection, setSectionSelection] = useState("");
  const [srcSelection, setSrcSelection] = useState("");
  const [titleSelection, setTitleSelection] = useState("");

  //HandleCourse
  const handleCourse = async (e) => {
    e.preventDefault();
    try {
      const data = await customFetch.post("/education/check-course", {
        course: courseSelection,
      });

      console.log(data.status);
      console.log(data.data.msg);

      //ACCEPTED STATUSCODE
      if (data.status === 202) {
        setIsCourse(false);
        setIsSection(true);
        toast.info(data.data.msg);
      }
      //CREATED STATUSCODE
      if (data.status === 201) {
        setIsCourse(false);
        setIsSection(true);
        toast.success(data.data.msg);
      }

      return;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleSection = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("section", sectionSelection);
    formData.append("course", courseSelection);

    try {
      const data = await customFetch.post("/education/check-section", formData);
      if (data.statusText === "Accepted") {
        setIsSection(false);
        setIsSrc(true);
        toast.info(data.data.msg);
      }
      if (data.statusText === "Created") {
        setIsSection(false);
        setIsSrc(true);
        toast.success(data.data.msg);
      }
      return;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("course", courseSelection);
    formData.append("section", sectionSelection);
    try {
      const data = await customFetch.post("/education/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.statusText === "Accepted") {
        setIsSrc(false);
        setIsCourse(true);
        toast.info(data.data.msg);
      }
      if (data.statusText === "Created") {
        setSrcSelection(data.data.file.src);
        toast.success(data.data.file.msg);
        setIsSrc(false);
        setFullCourse(true);
      }
      return;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const createFullCourse = async (e) => {
    e.preventDefault();
    const data = {
      course: courseSelection,
      section: sectionSelection,
      title: titleSelection,
      src: srcSelection,
    };
    try {
      const {
        data: { msg },
      } = await customFetch.post("/education/create-course", data);
      setFullCourse(false);
      setIsCourse(true);
      toast.success(msg);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <div className="title">
        <h1>
          file <span>upload</span>
        </h1>
      </div>
      <div className="title-underline"></div>
      <div className="section-center">
        <form method="POST" className="form">
          {/* Course */}
          {iscourse ? (
            <SelectOption
              labelText="courses"
              name="course"
              defaultValue={COURSES.MATH}
              value={courseSelection}
              onChange={(e) => setCourseSelection(e.target.value)}
              list={Object.values(COURSES)}
            />
          ) : null}
          {/* Section */}

          {isSection ? (
            <div className="forms">
              <label htmlFor="section" className="label">
                select what section to upload in
              </label>
              <input
                type="number"
                value={sectionSelection}
                onChange={(e) => setSectionSelection(e.target.value)}
                name="section"
                id="section"
                placeholder="1"
                className="input"
              />
            </div>
          ) : null}
          {/* Title */}
          {isSrc ? (
            <div className="forms">
              <label htmlFor="section" className="label">
                what is the title of the video?
              </label>
              <input
                type="text"
                name="title"
                className="input"
                placeholder="video 1"
                value={titleSelection}
                onChange={(e) => setTitleSelection(e.target.value)}
              />
            </div>
          ) : null}
          {/* File */}
          {isSrc ? (
            <input
              type="file"
              name="src"
              className="input"
              onChange={handleFile}
            />
          ) : null}

          <div className="btn-container">
            {/* CourseBtn */}
            {iscourse ? (
              <button
                type="button"
                onClick={handleCourse}
                className="btn-block"
              >
                prepare course
              </button>
            ) : null}
            {/* SectionBtn */}
            {isSection ? (
              <button
                type="button"
                onClick={handleSection}
                className="btn-block"
              >
                prepare section
              </button>
            ) : null}

            {fullCourse ? (
              <div>
                <h3 className="course-submit-message">
                  press submit to finish uploading the course
                </h3>
                <button
                  type="button"
                  onClick={createFullCourse}
                  className="btn-block"
                >
                  submit
                </button>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default Upload;
