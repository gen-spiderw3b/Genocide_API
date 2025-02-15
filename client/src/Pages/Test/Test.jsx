import customFetch from "../../Utils/customFetch";
import { useState, useRef } from "react";
const Test = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);
  const getDisk = async () => {
    try {
      await customFetch
        .get("/test", { responseType: "blob" })
        .then((response) => {
          const blobData = response.data;
          console.log(blobData);
          const url = URL.createObjectURL(blobData);
          setVideoUrl(url);
        });

      return;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <div>
      <h1>tests</h1>
      <button onClick={getDisk}>get disk</button>
      <video ref={videoRef} src={videoUrl} controls></video>
    </div>
  );
};
export default Test;
