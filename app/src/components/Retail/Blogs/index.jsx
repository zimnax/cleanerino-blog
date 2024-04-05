import React from "react";
import Header from "../common/Header";
import SearchBar from "../common/Search";
import Breadcrumbs from "../common/Breadcrumbs";
import Frame from "../common/Frame";
import SubHeading from "./SubHeading";
import RecentBlogs from "./RecentBlogs";
import FeaturedBlog from "./FeaturedBlog";
import AllBlogs from "./AllBlogs"

function Blogs() {
  const breadcrumbItems = [
    { text: "Home", href: "/", active: false },
    { text: "Blogs", href: "/blogs", active: true }, // active indicates the current page
  ];

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Frame>
        <Breadcrumbs items={breadcrumbItems} />
        <RecentBlogs/>
        <FeaturedBlog/>
        <AllBlogs/>
      </Frame>
    </div>
  );
}

export default Blogs;
