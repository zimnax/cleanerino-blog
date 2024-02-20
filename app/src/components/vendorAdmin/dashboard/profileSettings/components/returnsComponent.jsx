import { useEffect, useRef, useState } from "react";
import css from "../profile.module.css";

const ReturnsComponent = ({ setReturnsOnProf, returnsOnProf }) => {
  const handleRadioChange = () => {
    setReturnsOnProf(!returnsOnProf);
  };
  return (
    <div className={css.shipingWrap}>
      {" "}
      <div className={css.secondBShip}>
        <div className={css.wrapText}>
          <p className={css.mainTextPSecond}>Returns & Refunds</p>
          {returnsOnProf && (
            <p className={css.secondText}>
              Сustomers will reach out to you directly to request a return or
              refund
            </p>
          )}
          {!returnsOnProf && (
            <p className={css.secondText}>
              Сustomers will be notified that your store does not accept
              returns. You can change this at any time
            </p>
          )}
        </div>
        <div className={css.wrapPriceShip}>
          <div className={css.wraplabelShip}>
            <div className={css.chaWr}>
              <label className={css.check} onClick={handleRadioChange}>
                <input
                  name="freShi"
                  type="radio"
                  className={css.check__check}
                  checked={returnsOnProf}
                  onChange={() => {}} // Порожня функція, щоб уникнути помилок
                />
                <span className={css.check__indicator}></span>
              </label>
              {!returnsOnProf && <p className={css.of}>Off</p>}
              {returnsOnProf && <p className={css.on}>On</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReturnsComponent;
