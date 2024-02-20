import css from "./vendorReg.module.css";
import { ReactSVG } from "react-svg";
import logo from "../../../svg/logo-inline.svg";
import upload from "../../../svg/upload.svg";
import logoRec from "../../../img/Rectangle4.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../svg/chevron.svg";
import LeftSide from "./addProdComponents/leftSide";
import RightSide from "./addProdComponents/rightSide";
import axios from "axios";
import PopUpNext from "./addProdComponents/popUpNext";
const AddProduct = ({ setAddProdPage }) => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [prodName, setProdName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState("");
  const [glass, setGlass] = useState(null);
  const [metal, setMetal] = useState(null);
  const [paper, setPaper] = useState(null);
  const [plastic, setPlastic] = useState(null);
  const [sizes, setSizes] = useState([{ weight: 0, volume: 0, price: 0 }]);
  const [shape, setShape] = useState([{ shape: 0, price: 0 }]);
  const [scent, setScent] = useState([{ scent: 0, price: 0 }]);
  const [color, setColor] = useState([{ color: 0, price: 0 }]);
  const [productPrice, setProductPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [quantity, setQuantity] = useState("");
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeNames, setActiveNames] = useState([]);
  const [words, setWords] = useState([]); // Стан для зберігання списку слів
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [activeCategoriesAndNames, setActiveCategoriesAndNames] = useState({
    activeCategories: [],
    activeNames: [],
  });
  const startNewProd = () => {
    setWords([]);
    setUploadedImages([]);
    setUploadedVideos([]);
    setActiveCategories([]);
    setActiveNames([]);
    setQuantity("");
    setVolume("");
    setWeight("");
    setScent([{ scent: 0, price: 0 }]);
    setShape([{ shape: 0, price: 0 }]);
    setColor([{ color: 0, price: 0 }]);
    setProductPrice("");
    setSizes([{ weight: 0, volume: 0, price: 0 }]);
    setPlastic(null);
    setPaper(null);
    setMetal(null);
    setGlass(null);
    setProdName("");
    setShortDesc("");
    setLongDesc("");
    setPopUp(false);
  };
  const sendFile = async (id) => {
    try {
      const formData = new FormData();

      uploadedImages.forEach((image) => {
        formData.append("uploadedImages", image);
      });

      // Додавання відео до FormData
      uploadedVideos.forEach((video) => {
        formData.append("uploadedVideos", video);
      });

      const responseF = await axios.post(
        `http://localhost:4000/api/v1/vendor/product/file/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch {
      console.log("Error");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/vendor/product/add",
        {
          prodName,
          shortDesc,
          longDesc,
          selectedCategoryId,
          selectedTypeId,
          glass: parseInt(glass),
          metal: parseInt(metal),
          paper: parseInt(paper),
          plastic: parseInt(plastic),
          sizes,
          shape,
          scent,
          color,
          productPrice: parseInt(productPrice),
          weight: parseInt(weight),

          volume: parseInt(volume),
          quantity: parseInt(quantity),
          activeCategories,
          activeNames,
          words,
          // Додайте інші дані тут
        }
      );
      const id = response.data.id;
      if (response) {
        setPopUp(true);
      }
      sendFile(id);
      // Відправка завантажених зображень

      // Очистити інші поля тут
    } catch (error) {
      console.error("Помилка при відправленні даних на сервер:", error);
    }
  };
  const skipToDash = () => {
    navigate("/vendor/dashboard");
  };
  return (
    <>
      <div className={css.regWrap}>
        <div className={css.headerWrap}>
          <ReactSVG src={logo} />
          <button className={css.buttonSkip} onClick={skipToDash}>
            Skip
          </button>
        </div>
        <div className={css.titleWrap}>
          <p className={css.titleReg}>Add products</p>
          <p className={css.titleDesc}>
            Laoreet viverra et sit sit facilisi tristique. Sed ut sagittis sed
            velit commodo. Ullamcorper netus ac.
          </p>
          <div className={css.lineWrap}>
            <div className={css.lineGreen}></div>
            <div className={css.lineGreen}></div>
            <div className={css.lineGreen}></div>
          </div>
        </div>
        <div className={css.addProductWrap}>
          <LeftSide
            setUploadedImages={setUploadedImages}
            uploadedImages={uploadedImages}
            setUploadedVideos={setUploadedVideos}
            uploadedVideos={uploadedVideos}
            setProductPrice={setProductPrice}
            productPrice={productPrice}
            setWeight={setWeight}
            weight={weight}
            setVolume={setVolume}
            volume={volume}
            setQuantity={setQuantity}
            quantity={quantity}
            setActiveCategories={setActiveCategories}
            activeCategories={activeCategories}
            setActiveNames={setActiveNames}
            activeNames={activeNames}
            setWords={setWords}
            words={words}
            longDesc={longDesc}
            setActiveCategoriesAndNames={setActiveCategoriesAndNames}
            activeCategoriesAndNames={activeCategoriesAndNames}
          />
          <RightSide
            setShortDesc={setShortDesc}
            shortDesc={shortDesc}
            setProdName={setProdName}
            prodName={prodName}
            setSelectedCategoryId={setSelectedCategoryId}
            setSelectedTypeId={setSelectedTypeId}
            setGlass={setGlass}
            setMetal={setMetal}
            setPaper={setPaper}
            setPlastic={setPlastic}
            setSizes={setSizes}
            sizes={sizes}
            setShape={setShape}
            shape={shape}
            setScent={setScent}
            scent={scent}
            setColor={setColor}
            color={color}
            setLongDesc={setLongDesc}
            handleSubmit={handleSubmit}
            longDesc={longDesc}
          />
        </div>

        {popUp && (
          <PopUpNext
            startNewProd={startNewProd}
            setAddProdPage={setAddProdPage}
          />
        )}
      </div>
    </>
  );
};
export default AddProduct;
