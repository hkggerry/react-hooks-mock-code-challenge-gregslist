import React from "react";

function Search( {setSearchTerm, searchTerm} ) {

  console.log(searchTerm)

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
