import css from "../../dashboard.module.css";
import tagTrue from "../../../../../svg/TagSmall.svg";
import { ReactSVG } from "react-svg";
import direction from "../../../../../svg/Direction.svg";
import userUp from "../../../../../svg/UserDash.svg";
import totalOrder from "../../../../../svg/totalOrder.svg";
import cancelOrder from "../../../../../svg/CancelOrder.svg";
import Char from "./char";
import DashStat from "./dashStat";

const Dash = () => {
  return (
    <div className={css.dashWrap}>
      <p className={css.dashPmain}>Dashboard</p>
      <div className={css.statWrap}>
        <div className={css.statBlock}>
          <div className={css.wrapPup}>
            <div className={css.iconDiv}>
              <ReactSVG src={tagTrue} />
            </div>
            <p className={css.pStatUp}>Total sales</p>
          </div>
          <p className={css.pStatCenter}>50000$</p>
          <div className={css.wrapPDownd}>
            <div className={css.saleProcent}>
              <ReactSVG src={direction} />
              <span className={css.saleProcent}>+30%</span>
            </div>
            <p className={css.procentCurMonth}>+18.4 this month</p>
          </div>
        </div>
        <div className={css.statBlock}>
          <div className={css.wrapPup}>
            <div className={css.iconDiv}>
              <ReactSVG src={userUp} />
            </div>
            <p className={css.pStatUp}>Visitors</p>
          </div>
          <p className={css.pStatCenter}>50000</p>
          <div className={css.wrapPDownd}>
            <div className={css.saleProcent}>
              <ReactSVG src={direction} />
              <span className={css.saleProcent}>+30%</span>
            </div>
            <p className={css.procentCurMonth}>+18.4 this month</p>
          </div>
        </div>
        <div className={css.statBlock}>
          <div className={css.wrapPup}>
            <div className={css.iconDiv}>
              <ReactSVG src={totalOrder} />
            </div>
            <p className={css.pStatUp}>Total orders</p>
          </div>
          <p className={css.pStatCenter}>2000</p>
          <div className={css.wrapPDownd}>
            <div className={css.saleProcent}>
              <ReactSVG src={direction} />
              <span className={css.saleProcent}>+30%</span>
            </div>
            <p className={css.procentCurMonth}>+18.4 this month</p>
          </div>
        </div>
        <div className={css.statBlock}>
          <div className={css.wrapPup}>
            <div className={css.iconDiv}>
              <ReactSVG src={cancelOrder} />
            </div>
            <p className={css.pStatUp}>Refunded</p>
          </div>
          <p className={css.pStatCenter}>50000$</p>
          <div className={css.wrapPDownd}>
            <div className={css.saleProcent}>
              <ReactSVG src={direction} />
              <span className={css.saleProcent}>+30%</span>
            </div>
            <p className={css.procentCurMonth}>+18.4 this month</p>
          </div>
        </div>
      </div>
      {/*  Графік */}
      <Char />
      <DashStat />
    </div>
  );
};
export default Dash;
