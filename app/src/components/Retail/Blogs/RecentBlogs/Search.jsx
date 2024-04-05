import React, { useState } from "react";
import css from "../blogs.module.css";
import { ReactSVG } from "react-svg";
import searchIcon from "../../../../svg/Search.svg"

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={css.searchContainer}>
      <ReactSVG src={searchIcon}/>
      <input
        className={css.searchBarStyle}
        type="text"
        placeholder="Search Blogs"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
