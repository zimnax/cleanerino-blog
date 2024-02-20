import css from "../../dashboard.module.css";
import frArrow from "../../../../../svg/frameArrow.svg";
import { ReactSVG } from "react-svg";
import filter from "../../../../../svg/Filter.svg";
const SalesProduct = () => {
  return (
    <div className={css.salesProductWrap}>
      <div className={css.saleTopMenu}>
        <p className={css.pReportY}>Sales by product</p>
        <p className={css.sortByName}>
          <label className={css.sortLab}>Sort by:&nbsp;</label>
          <span className={css.sortSalProdSpan}>Product name</span>
          <ReactSVG src={frArrow} className={css.arrowLeft} />
        </p>
        <p className={css.sortByName}>
          <ReactSVG src={filter} className={css.filterRight} />
          <p className={css.sortDataP}>Date</p>
          <ReactSVG src={frArrow} className={css.arrowLeft} />
        </p>
      </div>
      <table className={css.table}>
        <tr className={css.mainTr}>
          <th className={css.thClass}>Name</th>
          <th className={css.thClass}>Price</th>
          <th className={css.thClass}>Discount</th>
          <th className={css.thClass}>Sold</th>
          <th className={css.thClass}>Total</th>
        </tr>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirst}>
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>$15</td>
          <td className={css.tdClass}>5%</td>
          <td className={css.tdClass}>30</td>
          <td className={css.tdClassLast}>$450</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirst}>
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>$15</td>
          <td className={css.tdClass}>5%</td>
          <td className={css.tdClass}>30</td>
          <td className={css.tdClassLast}>$450</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirst}>
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>$15</td>
          <td className={css.tdClass}>5%</td>
          <td className={css.tdClass}>30</td>
          <td className={css.tdClassLast}>$450</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirst}>
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>$15</td>
          <td className={css.tdClass}>5%</td>
          <td className={css.tdClass}>30</td>
          <td className={css.tdClassLast}>$450</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirst}>
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>$15</td>
          <td className={css.tdClass}>5%</td>
          <td className={css.tdClass}>30</td>
          <td className={css.tdClassLast}>$450</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tr className={css.secondTr}>
          <td className={css.tdClassFirst}>
            Pillar candle“Christmas tree ball”
          </td>
          <td className={css.tdClass}>$15</td>
          <td className={css.tdClass}>5%</td>
          <td className={css.tdClass}>30</td>
          <td className={css.tdClassLast}>$450</td>
        </tr>
        <div className={css.lineTableSale}></div>
        <tbody>{/* Рядки з даними тут */}</tbody>
      </table>
    </div>
  );
};
export default SalesProduct;
