import PropTypes from "prop-types";
const FormInput = ({ type, name, placeholder, defaultValue }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};
export default FormInput;
