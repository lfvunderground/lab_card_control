import P from "prop-types";
import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => (
  <>
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Search posts..."
    />
    <br />
    <br />
    <br />
  </>
);

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
