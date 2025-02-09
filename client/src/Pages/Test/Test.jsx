import customFetch from "../../Utils/customFetch";

const Test = () => {
  const handleTest = async () => {
    const folderName = "TestOne";
    try {
      await customFetch.post("/test/mountpath", folderName);
    } catch (error) {
      return error;
    }
  };
  return (
    <div>
      <h1>test</h1>

      <button type="button" onClick={handleTest}>
        testing mount path
      </button>
    </div>
  );
};
export default Test;
