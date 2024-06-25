import PropTypes from "prop-types";
const SelectOption = ({
  name,
  labelText,
  list,
  defaultValue = "",
  // eslint-disable-next-line react/prop-types
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        className="form-select"
        name={name}
        id={name}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
SelectOption.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  list: PropTypes.array,
  defaultValue: PropTypes.string,
};
export default SelectOption;
