import customFetch from "../../Utils/customFetch";
import { useState } from "react";
const Test = () => {
  const [src, setSrc] = useState("");
  const [isSrc, setIsSrc] = useState(false);
  console.log(src);

  const getFile = async () => {
    try {
      const { data } = await customFetch.get("/test");
      setSrc(data.file.src);
      setIsSrc(true);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <div>
      <h1>tests</h1>
      <button onClick={getFile}>get file</button>
      {isSrc ? <video src={src} autoPlay controls /> : null}
    </div>
  );
};
export default Test;
