import css from "../../dashboard.module.css";
import frArrow from "../../../../../svg/frameArrow.svg";
import { ReactSVG } from "react-svg";
import filter from "../../../../../svg/Filter.svg";
import image from "../../../../../img/ifdsdf.png";
const StoreStatistics = () => {
  return (
    <div className={css.salesProductWrap}>
      <div className={css.saleTopMenu}>
        <p className={css.pReportY}>Store statistics</p>
      </div>
      <table className={css.table}>
        <tr className={css.mainTr}>
          <th className={css.thClassTwoB}>Most popular products</th>
          <th className={css.thClass}>Views</th>
          <th className={css.thClass}>Store visits</th>
        </tr>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirstSecond}>
            <img className={css.imageInStat} src={image} />
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>124</td>
          <td className={css.tdClassTwo}>60</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirstSecond}>
            <img className={css.imageInStat} src={image} />
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>124</td>
          <td className={css.tdClassTwo}>60</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirstSecond}>
            <img className={css.imageInStat} src={image} />
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>124</td>
          <td className={css.tdClassTwo}>60</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirstSecond}>
            <img className={css.imageInStat} src={image} />
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>124</td>
          <td className={css.tdClassTwo}>60</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirstSecond}>
            <img className={css.imageInStat} src={image} />
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>124</td>
          <td className={css.tdClassTwo}>60</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirstSecond}>
            <img className={css.imageInStat} src={image} />
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>124</td>
          <td className={css.tdClassTwo}>60</td>
        </tr>
        <div className={css.lineTableSale}></div>
      </table>
    </div>
  );
};
export default StoreStatistics;
