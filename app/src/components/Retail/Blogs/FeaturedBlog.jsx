import React from "react";
import SubHeading from "./SubHeading";
import BlogCard from "./BlogCard";
import {featureBlog} from "../../../tempData"

function FeaturedBlog() {
  return (
    <div>
      <SubHeading text={"Featured blog post"} />
        <BlogCard
          isVertical={false}
          blog={featureBlog[0]}
          height="268px"
        />
    </div>
  );
}

export default FeaturedBlog;
