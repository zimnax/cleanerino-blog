import React from "react";
import "./BlogCard.css"; // Ensure you have a CSS file for styling
import css from "../blogs.module.css";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import blogNavigate from "../../../../svg/blogNavigatorArrow.svg";
import blogArrow from "../../../../svg/blogArrow.svg";

const BlogCard = ({ isVertical, blog, height }) => {
  const navigate = useNavigate();
  const cardClass = isVertical ? "blogcard vertical" : "blogcard horizontal";

  const handleClick = () => {
    navigate("/Blogs/Blog");
  };

  return (
    <div className={css.blogCard1}>
      <div className={cardClass}>
        <div
          className={css.blogimage}
          style={{ padding: !isVertical ? "24px 0 24px 24px" : "0" }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            style={{ height: height, borderRadius: !isVertical ? "30px" : 0 }}
          />
        </div>
        <div className={css.blogcontent}>
          <div>
          <p style={{ color: "rgba(72, 102, 66, 1)", lineHeight: 0 }}>
            {blog.author} • {blog.date}
          </p>
          <div className={css.headingAndIcon}>
            <h3 className="black">{blog.title}</h3>
            <button
              className={css.iconButton}
              aria-label="Next"
              onClick={handleClick}
            >
              {!isVertical ? (
                <ReactSVG src={blogArrow} />
              ) : (
                <ReactSVG src={blogNavigate} />
              )}
            </button>
          </div>
          <h6 className={css.blogsummary}>{blog.summary}</h6>
          </div>
          <div className={css.blogtags}>
            {blog.tag.map((tag, index) => (
              <span key={index} className={css.blogtag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
