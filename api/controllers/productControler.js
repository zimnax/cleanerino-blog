const db = require("../config/database.js");
const { Readable } = require("stream"); // Імпорт модуля stream
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const axios = require("axios");
const { Buffer } = require("buffer");

const fs = require("fs");
const _ = require("lodash");
const {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} = require("firebase/storage");
const { app } = require("../function/firebase.js");
const { promisify } = require("util");

exports.getAllProduct = (req, res) => {};
exports.createProduct = (req, res) => {
  const {
    prodName,
    shortDesc,
    longDesc,
    selectedCategoryId,
    selectedTypeId,
    glass,
    metal,
    paper,
    plastic,
    quantity,
    words,
    sizes,
    shape,
    scent,
    color,
    weight,
    volume,
    productPrice,
    activeNames,
  } = req.body;
  console.log(req.body);
  let pro;
  // Перевірка, чи всі обов'язкові дані були надіслані
  if (
    !prodName ||
    !shortDesc ||
    !selectedCategoryId ||
    !selectedTypeId ||
    !quantity
  ) {
    return res
      .status(400)
      .json({ message: "Будь ласка, надайте всі обов'язкові дані" });
  }

  let responseSent = false; // Флаг для відправлення відповіді

  // Запит до бази даних на додавання нового товару
  const query = `INSERT INTO products 
                 (product_name, short_description, long_description, quantity, ingredients, product_category_id, product_type_id, glass_id, metal_id, paper_cardboard_id, recyclable_plastic_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      prodName,
      shortDesc,
      longDesc,
      quantity,
      words.join(", "),
      selectedCategoryId,
      selectedTypeId,
      glass || null,
      metal || null,
      paper || null,
      plastic || null,
    ],
    (err, result) => {
      if (err) {
        console.error("Помилка при створенні товару:", err);
        if (!responseSent) {
          res.status(500).json({ message: "Помилка на сервері" });
          responseSent = true;
        }
        return;
      }

      const productId = result.insertId;
      pro = result.insertId;
      const dimensionQueryOne = `INSERT INTO dimensions (product_id, weight, volume, price) VALUES (?, ?, ?, ?)`;

      db.query(
        dimensionQueryOne,
        [productId, weight, volume, productPrice],
        (err, dimensionResult) => {
          if (err) {
            console.error("Помилка при додаванні розмірів товару:", err);
            if (!responseSent) {
              res.status(500).json({ message: "Помилка на сервері" });
              responseSent = true;
            }
            return;
          }

          shape.forEach((item) => {
            if (item.shape !== 0 || item.price !== 0) {
              const variationQuery = `INSERT INTO variation (product_id, unit, parameter_value, price) VALUES (?, ?, ?, ?)`;
              db.query(
                variationQuery,
                [productId, "shape", item.shape, item.price],
                (err, variationResult) => {
                  if (err) {
                    console.error(
                      "Помилка при додаванні варіацій товару:",
                      err
                    );
                    return res
                      .status(500)
                      .json({ message: "Помилка на сервері" });
                  }
                }
              );
            }
          });

          // Додавання даних до таблиці variation для об'єктів scent
          scent.forEach((item) => {
            if (item.scent !== 0 || item.price !== 0) {
              const variationQuery = `INSERT INTO variation (product_id, unit, parameter_value, price) VALUES (?, ?, ?, ?)`;
              db.query(
                variationQuery,
                [productId, "scent", item.scent, item.price],
                (err, variationResult) => {
                  if (err) {
                    console.error(
                      "Помилка при додаванні варіацій товару:",
                      err
                    );
                    return res
                      .status(500)
                      .json({ message: "Помилка на сервері" });
                  }
                }
              );
            }
          });

          // Додавання даних до таблиці variation для об'єктів color
          color.forEach((item) => {
            if (item.color !== 0 || item.price !== 0) {
              const variationQuery = `INSERT INTO variation (product_id, unit, parameter_value, price) VALUES (?, ?, ?, ?)`;
              db.query(
                variationQuery,
                [productId, "color", item.color, item.price],
                (err, variationResult) => {
                  if (err) {
                    console.error(
                      "Помилка при додаванні варіацій товару:",
                      err
                    );
                    return res
                      .status(500)
                      .json({ message: "Помилка на сервері" });
                  }
                }
              );
            }
          });
          // Перевірка наявності розмірів товару
          if (
            sizes.length === 1 &&
            sizes[0].weight === 0 &&
            sizes[0].volume === 0 &&
            sizes[0].price === 0
          ) {
            console.log("Розміри товару не вказані або мають значення 0");
          } else {
            for (let i = 0; i < sizes.length; i++) {
              const size = sizes[i];
              if (size.weight !== 0 || size.volume !== 0 || size.price !== 0) {
                const dimensionQuery = `INSERT INTO dimensions (product_id, weight, volume, price) VALUES (?, ?, ?, ?)`;
                db.query(
                  dimensionQuery,
                  [productId, size.weight, size.volume, size.price],
                  (err, dimensionResult) => {
                    if (err) {
                      console.error(
                        "Помилка при додаванні розмірів товару:",
                        err
                      );
                      if (!responseSent) {
                        res.status(500).json({ message: "Помилка на сервері" });
                        responseSent = true;
                      }
                      return;
                    }
                    console.log("dimensionResult", dimensionResult);
                  }
                );
              }
            }
          }
          if (activeNames.length > 0) {
            activeNames.forEach((item) => {
              const { category, subcategory } = item;
              const certificateQuery = `INSERT INTO prod_certificate (prod_id, certif_cat, certif_sub_cat) VALUES (?, ?, ?)`;
              db.query(
                certificateQuery,
                [productId, category, subcategory],
                (err, certificateResult) => {
                  if (err) {
                    console.error(
                      "Помилка при додаванні даних до таблиці prod_certificate:",
                      err
                    );
                    if (!responseSent) {
                      res.status(500).json({ message: "Помилка на сервері" });
                      responseSent = true;
                    }
                    return;
                  }
                  console.log("certificateResult", certificateResult);
                }
              );
            });
          }
          if (!responseSent) {
            res.status(200).json({
              status: "success",
              message: "Товар успішно доданий",
              id: pro,
            });
            responseSent = true;
          }
        }
      );
    }
  );
};
