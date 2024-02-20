import css from "../../dashboard.module.css";
import SalesProduct from "./salesProduct";
import StoreStatistics from "./storeStatistics";

const DashStat = () => {
  return (
    <div className={css.dashStatWrap}>
      <SalesProduct />
      <StoreStatistics />
    </div>
  );
};
export default DashStat;
