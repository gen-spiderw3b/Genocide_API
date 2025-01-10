const RemoveSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div>
      <form method="POST" className="form" onSubmit={handleSubmit}>
        <label htmlFor="removeSection" className="form-label">
          what section do you want to remove?
        </label>
        <input
          type="number"
          name="removeSection"
          id="removeSection"
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
export default RemoveSection;
