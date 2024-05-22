/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { ReactSVG } from "react-svg";
import searchIcon from "../../../svg/Search.svg";

// Define styles for the search bar, dropdown, and icon
const searchBarContainerStyle = css`
  display: flex;
  align-items: center;
  border: 2px solid rgba(72, 102, 66, 1);
  border-radius: 100px; // Updated border-radius
  padding: 5px;
  width: 774px;
  max-width: 100%;
  margin: auto;
`;

const col = css`
  padding: 10px 0;
`;

const searchBarStyle = css`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  margin: 0;
  outline: none;
  border-radius: 100px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    // Trigger search when the Enter key is pressed
    if (e.key === "Enter") {
      onSearch(searchTerm, selectedCategory);
    }
  };

  return (
    <div css={col}>
      <div css={searchBarContainerStyle}>
        <input
          css={searchBarStyle}
          type="text"
          placeholder="Search for your new favorite..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Added keypress event to handle search on Enter
        />
        <div
          style={{ width: 40, height: 40, background: "rgba(72, 102, 66, 1)", borderRadius:100,display: "flex",
          justifyContent: "center",
          alignItems: "center",cursor: "pointer",}}
        >
          <ReactSVG src={searchIcon} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
