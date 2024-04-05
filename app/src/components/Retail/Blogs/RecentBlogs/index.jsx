import React from "react";
import SubHeading from "../SubHeading";
import css from "../blogs.module.css";
import BlogCard from "../BlogCard";
import {recentBlog} from "../../../../tempData"
import Search from "./Search";

function RecentBlogs() {
  return (
    <div>
      <SubHeading text={"Recent blog posts"} />
      <Search/>
      <div className={css.bloggrid}>
        <BlogCard
          isVertical={true}
          blog={recentBlog[0]}
          height="348px"
        />

        <div className={css.blogsmallcontainer}>
        <BlogCard
          isVertical={false}
          blog={recentBlog[1]}
          height="272px"
        />
          <BlogCard
          isVertical={false}
          blog={recentBlog[2]}
          height="272px"
        />
        </div>
      </div>
    </div>
  );
}

export default RecentBlogs;
