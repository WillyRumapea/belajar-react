function Search() {
  return (
    <form>
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("searching ur request");
        }}
      >
        dugong
      </button>
    </form>
  );
}

export default Search;
