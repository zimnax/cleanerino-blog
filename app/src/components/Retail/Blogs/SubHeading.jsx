import css from "./blogs.module.css"

const SubHeading = ({ text }) => (
  <h2 className={css.subHeading}>{text}</h2>
);

export default SubHeading;
