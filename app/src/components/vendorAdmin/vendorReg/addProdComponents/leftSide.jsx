import { useCallback, useState } from "react";
import css from "../vendorReg.module.css";
import "./styleT.css";
import { useDropzone } from "react-dropzone";
import upload from "../../../../svg/upload2.svg";
import { ReactSVG } from "react-svg";
import cancel from "../../../../svg/Union.svg";
import smile from "../../../../svg/smile.svg";

import Certificat from "./certificat";
const LeftSide = ({
  setProductPrice,
  productPrice,
  setWeight,
  weight,
  setVolume,
  volume,
  setQuantity,
  quantity,
  setActiveCategories,
  activeCategories,
  setActiveNames,
  activeNames,
  setWords,
  words,
  setUploadedImages,
  uploadedImages,
  setUploadedVideos,
  uploadedVideos,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    const imageFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image")
    );
    const videoFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("video")
    );

    setUploadedImages((prevUploadedImages) => [
      ...prevUploadedImages,
      ...imageFiles,
    ]);
    setUploadedVideos((prevUploadedVideos) => [
      ...prevUploadedVideos,
      ...videoFiles,
    ]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  ///////////////////////////////////////////////////////////
  const [inputValue, setInputValue] = useState(""); // Стан для зберігання значення введеного тексту

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue !== "") {
        // Розділити введений текст на слова після кожної коми
        const newWords = trimmedValue.split(",").map((word) => word.trim());
        // Додати кожне слово окремо до масиву слів
        setWords([...words, ...newWords]);
        setInputValue(""); // Очистити поле вводу
      }
    }
  };

  // Додавання слова до масиву слів
  const addWord = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      setWords([...words, trimmedValue]); // Додаємо слово до списку слів
      setInputValue(""); // Очищаємо поле введення
    }
  };

  const removeWord = (index) => {
    const newWords = [...words];
    newWords.splice(index, 1); // Видаляємо слово за індексом
    setWords(newWords); // Оновлюємо список слів
  };

  return (
    <div className={css.leftSideWrap}>
      <div {...getRootProps()} className={css.dropzoneStyle}>
        <input {...getInputProps({ accept: "image/*,video/*" })} />

        {isDragActive ? (
          <p>Click to upload Photo/Video or drag and drop</p>
        ) : (
          <div className={css.txWrap}>
            <ReactSVG src={upload} className={css.svgStyle} />
            <p className={css.pForDrO}>
              Click to upload Photo/Video or drag and drop
            </p>
            <p className={css.pForDrS}>
              *.svg, *.png, *.jpeg, *.jpg, *.gif. Size{" "}
              <span className={css.pForDrSpan}>280х432px.</span>
            </p>
          </div>
        )}
      </div>
      <div className={css.dropWrapI}>
        {uploadedImages.map((file, index) => (
          <img
            key={index}
            className={css.imgDr}
            src={URL.createObjectURL(file)}
            alt={`Uploaded image ${index}`}
          />
        ))}
        {uploadedVideos.map((file, index) => (
          <video
            key={index}
            className={css.imgDr}
            src={URL.createObjectURL(file)}
            controls
          >
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <div className={css.priceWrap}>
        <label className={css.labelInpBold}>Price</label>
        <div className={css.priceWrapSmall}>
          <label className={css.labelInp}>Price product</label>
          <div className={css.wrapPriceInput}>
            <ReactSVG src={smile} className={css.smileSvg} />
            <input
              className={css.proceInput}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="14$"
            />
          </div>
        </div>
      </div>
      <div className={css.priceWrap}>
        <label className={css.labelInpBold}>Size</label>
        <div className={css.priceWrapSmallFl}>
          <div className={css.oneSmalInp}>
            <label className={css.labelInp}>Weight</label>

            <input
              className={css.proceInputSmal}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0.5"
            />
          </div>

          <div className={css.oneSmalInp}>
            <label className={css.labelInp}>Volume</label>

            <input
              className={css.proceInputSmal}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="15"
            />
          </div>
        </div>
      </div>
      <div className={css.priceWrap}>
        <label className={css.labelInpBold}>Quantity</label>
        <div className={css.priceWrapSmall}>
          <label className={css.labelInp}>Quantity</label>

          <input
            className={css.proceInputQu}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="2568"
          />
        </div>
      </div>
      {/*////////////////////////////////////////////// */}
      <div className={css.priceWrapContainer}>
        <label className={css.labelInpBold}>Ingredients</label>
        <div className={css.priceWrapSmallWord}>
          <label className={css.labelInp}>Ingredients</label>
          <input
            type="text"
            className={css.proceInputte}
            value={inputValue}
            onChange={handleChange}
            placeholder=""
            onKeyDown={handleKeyDown} // Додаємо обробник події натискання клавіш
          />
          {words.length > 0 && (
            <div className={css.wordsInInput}>
              {words.map((word, index) => (
                <div key={index} className={css.word}>
                  {word}
                  {/* Кнопка для видалення */}

                  <ReactSVG
                    src={cancel}
                    className={css.cancelSvg}
                    onClick={() => removeWord(index)}
                  />
                </div>
              ))}
            </div>
          )}
          <p className={css.pTOIngred}>
            Paste ingredient list” - “Please make sure to indicate the origin
            (source) of such ingredients as palm oil, mica, etc. to transparency
            in ingredient sourcing.
          </p>
        </div>
      </div>
      <Certificat
        setActiveCategories={setActiveCategories}
        activeCategories={activeCategories}
        setActiveNames={setActiveNames}
        activeNames={activeNames}
      />
    </div>
  );
};
export default LeftSide;
