import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import {
  EditNavbar,
  AddSection,
  RemoveSection,
  AddFile,
  RemoveFile,
  EditData,
} from "../../Components/index";
import Wrapper from "../../Wrappers/Education/edit";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/education/my-course/${params.courseId}`
    );
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Edit = () => {
  const [section, setSection] = useState(false);
  const [removeSection, setRemoveSection] = useState(false);
  const [file, setFile] = useState(false);
  const [removeFile, setRemoveFile] = useState(false);
  const { course } = useLoaderData();

  return (
    <Wrapper>
      <div className="nav">
        <EditNavbar
          section={section}
          setSection={setSection}
          removeSection={removeSection}
          setRemoveSection={setRemoveSection}
          file={file}
          setFile={setFile}
          removeFile={removeFile}
          setRemoveFile={setRemoveFile}
        />
      </div>
      <div className="section-center">
        {/* section */}
        {section ? <AddSection course={course} /> : null}
        {/*  Removesection */}
        {removeSection ? <RemoveSection course={course} /> : null}
        {/*  file */}
        {file ? <AddFile course={course} /> : null}
        {/*  Remove file */}
        {removeFile ? <RemoveFile course={course} /> : null}
        {section || removeSection || file || removeFile ? (
          <div className="data-true">
            <EditData course={course} />
          </div>
        ) : (
          <div className="data-false">
            <EditData course={course} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default Edit;
