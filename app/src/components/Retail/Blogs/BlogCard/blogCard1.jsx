import React from "react";
import "./BlogCard.css"; // Ensure your CSS file is imported
import { useNavigate } from "react-router-dom";
import css from "../blogs.module.css";
import { ReactSVG } from "react-svg";
import blogArrow from "../../../../svg/blogArrow1.svg";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Blogs/Blog");
  };

  return (
    <div className="blogCard" style={{ backgroundImage: `url(${blog.image})` }}>
      <div className="blogContent">
        <div>
          <div style={{color:"rgba(229, 229, 229, 1)"}}>
            <p style={{ color: "rgba(229, 229, 229, 1)", lineHeight: 0 }}>
              {blog.author} • {blog.date}
            </p>
            <div className={css.headingAndIcon}>
              <h3 >{blog.title}</h3>
              <button
                className={css.iconButton}
                aria-label="Next"
                onClick={handleClick}
              >
                <ReactSVG src={blogArrow} />
              </button>
            </div>
            <h6 className={css.blogsummary1}>{blog.summary}</h6>
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
