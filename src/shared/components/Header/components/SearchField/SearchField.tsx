
import './SearchField.scss'


export const SearchField = () => {

  return (
    <form
      className="search"
    >
      <label className="search__label">
        <input
          className="search__input"
          type="text"
          placeholder="Search ..."
        />
        <button type="button" >x</button>
      </label>

    </form>
  );
};
