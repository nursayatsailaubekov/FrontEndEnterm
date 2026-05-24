function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <h3>Search for car</h3>
      <input
        type="text"
        placeholder="Search by brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    
    </div>
  );
}

export default SearchBar;
