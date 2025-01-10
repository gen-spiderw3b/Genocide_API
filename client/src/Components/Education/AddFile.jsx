const AddFile = () => {
  const handleFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
  };
  return (
    <div>
      <form method="POST" className="form">
        <label htmlFor="file" className="form-label">
          what file do you want to add?
        </label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleFile}
          className="form-input"
        />
        <label htmlFor="section" className="form-label">
          what section do you want to add it too?
        </label>
        <input
          type="number"
          name="section"
          id="section"
          className="form-input"
        />

        <button type="button" className="btn btn-block">
          initalize file
        </button>
        <button type="button" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default AddFile;
