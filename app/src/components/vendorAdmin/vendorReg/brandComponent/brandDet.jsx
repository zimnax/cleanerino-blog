import css from "../vendorReg.module.css";
import { ReactSVG } from "react-svg";
import arrow from "../../../../svg/chevron.svg";
import withMySQLData from "../../../HOK/withMySQLData";
const BrandDet = ({ data, setBrandIs }) => {
  const handleSelectChange = (event) => {
    const selectedBrandId = event.target.value;

    setBrandIs(selectedBrandId);
  };
  return (
    <div className={css.selectWr}>
      <label className={css.labelInp}>My brand is</label>
      <div className={css.wrapSelectF}>
        <select
          className={css.brandSelect}
          onChange={handleSelectChange}
          name="my_brand_id"
        >
          {data &&
            data.map((el, index) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            })}
        </select>
        <ReactSVG className={css.customArrowSelect} src={arrow} />
      </div>
    </div>
  );
};
export default withMySQLData("http://localhost:4000/api/v1/vendor/det/brand")(
  BrandDet
);
