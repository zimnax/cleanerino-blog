const db = require("../config/database.js");

exports.getAllCategory = (req, res) => {
  // Запит до бази даних на отримання всіх користувачів
  const query = `
  SELECT pc.id AS category_id, pc.name AS category_name, pt.id AS type_id, pt.name AS type_name
  FROM product_categories pc
  JOIN product_types pt ON pc.id = pt.category_id
`;
  db.query(query, (err, result) => {
    if (err) {
      console.error("Помилка при отриманні деталей:", err);
      return res.status(500).json({ message: "Помилка на сервері" });
    }

    // Якщо користувачі успішно отримані з бази даних
    return res.status(200).json(result);
  });
};
