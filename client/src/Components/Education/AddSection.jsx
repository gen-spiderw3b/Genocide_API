const AddSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div>
      <form method="POST" className="form" onSubmit={handleSubmit}>
        <label htmlFor="section" className="form-label">
          what section do you want to add?
        </label>
        <input
          type="number"
          name="section"
          id="section"
          className="form-input"
          placeholder="1"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default AddSection;
