const Search = ({ word, setword, handleSubmit }) => {
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Image"
        value={word}
        onChange={(e) => setword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Search;
