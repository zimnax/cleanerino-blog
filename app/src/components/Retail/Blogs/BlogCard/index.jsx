import React from "react";
import "./BlogCard.css"; // Ensure you have a CSS file for styling
import css from "../blogs.module.css";
import { useNavigate } from "react-router-dom"; 
import { ReactSVG } from "react-svg";
import blogNavigate from "../../../../svg/blogNavigatorArrow.svg"

const BlogCard = ({ isVertical, blog, height }) => {
  const navigate = useNavigate();
  const cardClass = isVertical ? "blogcard vertical" : "blogcard horizontal";

  const handleClick = () => {
    navigate('/Blogs/Blog'); // Navigate to the specified path
  };

  return (
    <div className={cardClass}>
      <div className={css.blogimage}>
        <img src={blog.image} alt={blog.title} style={{ height: height }} />
      </div>
      <div className={css.blogcontent}>
        <p className="primary">
          {blog.author} • {blog.date}
        </p>
        <div className={css.titleAndIcon}></div>
        <div className={css.headingAndIcon}>
          <h3 className="black">{blog.title}</h3>
          <button className={css.iconButton} aria-label="Next" onClick={handleClick}>
          <ReactSVG src={blogNavigate} />
          </button>
        </div>
        <h6 className={css.blogsummary}>{blog.summary}</h6>
        <div className={css.blogtags}>
          {blog.tag.map((tag, index) => (
            <span key={index} className={css.blogtag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
