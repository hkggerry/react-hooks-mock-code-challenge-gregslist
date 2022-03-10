import React from "react";
import Search from "./Search";


function Header({ image, setSearchTerm, searchTerm}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search image={image} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
    </header>
  );
}

export default Header;
