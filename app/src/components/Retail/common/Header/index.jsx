/** @jsxImportSource @emotion/react */
import React from "react";
import { ReactSVG } from "react-svg";
import logo from "../../../../svg/Logo.svg";
import bag from "../../../../svg/Bag.svg";
import line from "../../../../svg/Line.svg";
import home from "../../../../svg/Home.svg";
import liked from "../../../../svg/Liked.svg";
import notification from "../../../../svg/Notification.svg";
import {
  headerStyle,
  navListStyle,
  navItemStyle,
  dropdownStyle,
} from "./Headerstyles";
import { useState } from "react";
import SearchBar from "../Search";
import Profil from "../../../../img/pp.webp"

function Header() {
  const categories = [
    "categories",
    "Skincare",
    "Haircare",
    "Makeup",
    "Fragrances",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <header css={headerStyle}>
      <div>
        <ReactSVG src={logo} />
      </div>
      <select
        css={dropdownStyle}
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <SearchBar />
      <nav>
        <ul css={navListStyle}>
          <li css={navItemStyle}>
            <div style={{ fontFamily: "Inter", fontSize: 19, fontWeight: 600,color: "rgba(72, 102, 66, 1)" }}>
              Name
            </div>
          </li>
          <li css={navItemStyle}>
            <div style={{ width: 40, height: 40, border: "2px solid rgba(72, 102, 66, 1)", padding:2,borderRadius: 21 }}>
            <img src={Profil} alt="Description" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
            </div>
          </li>
          <li css={navItemStyle}>
            <ReactSVG src={home} />
          </li>
          <li css={navItemStyle}>
            <ReactSVG src={line} />
          </li>
          <li css={navItemStyle}>
            <ReactSVG src={notification} />
          </li>
          <li css={navItemStyle}>
            <ReactSVG src={liked} />
          </li>
          <li css={navItemStyle}>
            <ReactSVG src={bag} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
