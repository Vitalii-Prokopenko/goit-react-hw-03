import PropTypes from "prop-types";
import css from "./searchbox.module.css";

const SearchBox = ({ filter, onType }) => {
  const handleChange = (event) => {
    onType(event.target.value)
  }
  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input className={css.filterField} type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};

SearchBox.PropTypes = {
  filter: PropTypes.string.isRequired,
  onType: PropTypes.func.isRequired,
}

export default SearchBox;
