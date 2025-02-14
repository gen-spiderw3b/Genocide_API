import customFetch from "../../Utils/customFetch";
import { useState } from "react";
const Test = () => {
  const [src, setSrc] = useState("");
  const [isSrc, setIsSrc] = useState(false);
  console.log(src);

  const handleFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("file", file);

    try {
      const data = await customFetch.post("/test", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      //CREATED STATUSCODE
      if (data.status === 201) {
        setSrc(data.data.file.src);
        setIsSrc(true);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const getVideo = async () => {
    try {
      const data = await customFetch.get("/video", {
        headers: {
          "Content-Type": "video/mp4",
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <div>
      <h1>tests</h1>
      <form method="POST">
        <input type="file" name="src" className="input" onChange={handleFile} />
      </form>
      <button type="button" onClick={getVideo}>
        get file
      </button>
      {isSrc ? <video src={`../../../../${src}`} autoPlay controls /> : null}
    </div>
  );
};
export default Test;
