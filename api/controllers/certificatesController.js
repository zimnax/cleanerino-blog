const db = require("../config/database.js");

exports.getAllCertification = (req, res) => {
  // Запит до бази даних на отримання всіх користувачів
  const query = `
  SELECT cc.*, cs.*, cc.name AS category_name
  FROM certification_categories cc
  JOIN certification_subcategories cs ON cc.id = cs.category_id;
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
