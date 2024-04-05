import React from "react";
import Header from "../common/Header";
import SearchBar from "../common/Search";
import Breadcrumbs from "../common/Breadcrumbs";
import Frame from "../common/Frame";
import { blogs } from "../../../tempData";
import css from "./blogs.module.css";
import DOMPurify from 'dompurify';
import ContainedButton from "../common/ContainedButton";


function BlogPage() {
  const dirtyHtml =
    "<script>alert('XSS')</script>"+blogs[0].content;
  const cleanHtml = DOMPurify.sanitize(dirtyHtml);
  const breadcrumbItems = [
    { text: "Home", href: "/", active: false },
    { text: "Blogs", href: "/blogs", active: false },
    { text: blogs[0].title, href: "/blogs/blog", active: false },
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
        <h1>{blogs[0].title}</h1>
        <p className="primary">{blogs[0].author} • {blogs[0].date}</p>
        <img src={blogs[0].image} className={css.blogPageImg}></img>
        <div className={css.htmlText} dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        <div className={css.blogPageButtonsDiv}>
            <ContainedButton text={"Previous"}/>
            <ContainedButton text={"Next"}/>
        </div>
      </Frame>
    </div>
  );
}

export default BlogPage;
