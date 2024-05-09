import React from "react";
import SubHeading from "./SubHeading";
import BlogCard from "./BlogCard";
import { allBlogs } from "../../../tempData";
import css from "./blogs.module.css";
import ContainedButton from "../common/ContainedButton";

function AllBlogs() {
  return (
    <div className={css.allBlogsFrame}>
      <SubHeading text={"All blog posts"} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {allBlogs.map((blog, index) => (
          <BlogCard key={index} isVertical={true} blog={blog} height="240px" />
        ))}
      </div>
      <div className={css.loadButton}>
        <ContainedButton text="Load More" />
      </div>
    </div>
  );
}

export default AllBlogs;
