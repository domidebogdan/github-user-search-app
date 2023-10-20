import classes from "./SearchBar.module.css";

function SearchBar({
  onSearchUser,
  hasError,
}: {
  onSearchUser: Function;
  hasError: boolean;
}) {
  function handleSearch(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearchUser(event.currentTarget.searchTerm.value);
  }
  return (
    <div className={classes.holder}>
      <div className={classes.icon}></div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search GitHub username..."
          className={classes.searchTerm}
        />
        <p className={hasError ? classes.error : ""}>No results</p>
        <button className={classes.button}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
