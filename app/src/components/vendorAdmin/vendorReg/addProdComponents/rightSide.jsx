import { useState } from "react";
import css from "../vendorReg.module.css";
import { ReactSVG } from "react-svg";
import arrow from "../../../../svg/chevron.svg";
import ProdType from "./prodType";
import ProdCategory from "./prodCategory";
import Packaging from "./packaging";
import Diman from "./diman";
import Size from "./size";
import Shape from "./shape";
import Scent from "./scent";
const RightSide = ({
  setShortDesc,
  shortDesc,
  setProdName,
  prodName,
  setSelectedCategoryId,
  setSelectedTypeId,
  setGlass,
  setMetal,
  setPaper,
  setPlastic,
  setSizes,
  sizes,
  setShape,
  shape,
  setScent,
  scent,
  setColor,
  color,
  setLongDesc,
  longDesc,
  handleSubmit,
}) => {
  const [newDetail, setNewDetail] = useState(false);
  return (
    <div className={css.rightSideWrap}>
      <div className={css.priceWrapRight}>
        <label className={css.labelInpBold}>Product information</label>
        <div className={css.priceWrapBig}>
          <label className={css.labelInp}>Product name</label>
          <div className={css.wrapPriceInput}>
            <input
              className={css.proceInputBig}
              placeholder="Placeholder"
              onChange={(e) => setProdName(e.target.value)}
              value={prodName}
            />
          </div>
        </div>
        <div className={css.priceWrapBig}>
          <label className={css.labelInp}>Short description</label>
          <div className={css.wrapPriceInput}>
            <input
              className={css.proceInputBig}
              placeholder="Invigorating vegan body wash"
              onChange={(e) => setShortDesc(e.target.value)}
              value={shortDesc}
            />
          </div>
        </div>
        <div className={css.priceWrapBigTe}>
          <label className={css.labelInp}>Long description</label>

          <textarea
            className={css.textAreaDesc}
            placeholder="Invigorating vegan body wash"
            onChange={(e) => setLongDesc(e.target.value)}
            value={longDesc}
          />
        </div>
      </div>
      <div className={css.priceWrap}>
        <label className={css.labelInpBold}>Category</label>
        <div className={css.priceWrapSmallBig}>
          <ProdCategory
            setSelectedCategoryId={setSelectedCategoryId}
            setSelectedTypeId={setSelectedTypeId}
          />
        </div>
      </div>
      <Packaging
        setGlass={setGlass}
        setMetal={setMetal}
        setPaper={setPaper}
        setPlastic={setPlastic}
      />
      <div className={css.priceWrapRightDiferent}>
        <label className={css.labelInpBold}>
          Does this product come in different sizes, shapes, scents, or colors?
        </label>
        <div className={css.wrapButtonAdd}>
          <button
            className={newDetail ? css.buttonNo : css.buttonNoYes}
            onClick={() => setNewDetail(false)}
          >
            No
          </button>
          <button
            className={newDetail ? css.buttonYesYes : css.buttonYesNo}
            onClick={() => setNewDetail(true)}
          >
            Yes, add a variation
          </button>
        </div>
      </div>
      {newDetail && (
        <>
          {" "}
          <Size setSizes={setSizes} sizes={sizes} />
          <Shape setShape={setShape} shape={shape} />
          <Scent setScent={setScent} scent={scent} />
          <Diman setColor={setColor} color={color} />
        </>
      )}

      <div className={css.twoButtWr}>
        <button className={css.canselBut}>Cancel</button>
        <button className={css.buttonSubmit} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
};
export default RightSide;
