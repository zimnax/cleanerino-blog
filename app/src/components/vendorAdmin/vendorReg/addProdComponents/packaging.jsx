import css from "../vendorReg.module.css";
import { ReactSVG } from "react-svg";
import arrow from "../../../../svg/chevron.svg";
import withMySQLData from "../../../HOK/withMySQLData";
import { useState } from "react";
const Packaging = ({ data, setGlass, setMetal, setPaper, setPlastic }) => {
  const handleGlassChange = (e) => {
    const g = e.target.value;
    setGlass(g);
  };
  const handleMetalChange = (e) => {
    const g = e.target.value;
    setMetal(g);
  };
  const handlePaperChange = (e) => {
    const g = e.target.value;
    setPaper(g);
  };
  const handlePlasticChange = (e) => {
    const g = e.target.value;
    setPlastic(g);
  };
  return (
    <div className={css.priceWrapRightPak}>
      <label className={css.labelInpBold}>Packaging</label>
      <div className={css.priceWrapBig}>
        <label className={css.labelInp}>Glass</label>
        <div className={css.wrapPriceInput}>
          <div className={css.wrapSelectF}>
            <select
              className={css.proceInputBigSelectBig}
              onChange={handleGlassChange}
            >
              <option value={null}>Select a packaging</option>
              {data.map((el, index) => {
                if (el.category_id === 1) {
                  return (
                    <option key={index} value={el.id}>
                      {el.name}
                    </option>
                  );
                }
              })}
            </select>
            <ReactSVG className={css.customArrowSelect} src={arrow} />
          </div>
        </div>
      </div>
      <div className={css.priceWrapBig}>
        <label className={css.labelInp}>Metal</label>
        <div className={css.wrapPriceInput}>
          <div className={css.wrapSelectF}>
            <select
              className={css.proceInputBigSelectBig}
              onChange={handleMetalChange}
            >
              <option value={null}>Select a packaging</option>
              {data.map((el, index) => {
                if (el.category_id === 2) {
                  return (
                    <option key={index} value={el.id}>
                      {el.name}
                    </option>
                  );
                }
              })}
            </select>
            <ReactSVG className={css.customArrowSelect} src={arrow} />
          </div>
        </div>
      </div>
      <div className={css.priceWrapBig}>
        <label className={css.labelInp}>Paper & Cardboard</label>

        <div className={css.wrapPriceInput}>
          <div className={css.wrapSelectF}>
            <select
              className={css.proceInputBigSelectBig}
              onChange={handlePaperChange}
            >
              <option value={null}>Select a packaging</option>
              {data.map((el, index) => {
                if (el.category_id === 3) {
                  return (
                    <option key={index} value={el.id}>
                      {el.name}
                    </option>
                  );
                }
              })}
            </select>
            <ReactSVG className={css.customArrowSelect} src={arrow} />
          </div>
        </div>
      </div>
      <div className={css.priceWrapBig}>
        <label className={css.labelInp}>Recyclable plastic</label>

        <div className={css.wrapPriceInput}>
          <div className={css.wrapSelectF}>
            <select
              className={css.proceInputBigSelectBig}
              onClick={handlePlasticChange}
            >
              <option value={null}>Select a packaging</option>
              {data.map((el, index) => {
                if (el.category_id === 4) {
                  return (
                    <option key={index} value={el.id}>
                      {el.name}
                    </option>
                  );
                }
              })}
            </select>
            <ReactSVG className={css.customArrowSelect} src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default withMySQLData(
  "http://localhost:4000/api/v1/vendor/product/packaging"
)(Packaging);
