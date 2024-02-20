const db = require("../config/database.js");

exports.getAllUsers = (req, res) => {
  // Запит до бази даних на отримання всіх користувачів
  const query = "SELECT * FROM users";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Помилка при отриманні користувачів:", err);
      return res.status(500).json({ message: "Помилка на сервері" });
    }

    // Якщо користувачі успішно отримані з бази даних
    return res.status(200).json(result);
  });
};
exports.getUserById = (req, res) => {
  const userId = req.params.id;

  // Перевірка, чи був наданий ідентифікатор користувача
  if (!userId) {
    return res
      .status(400)
      .json({ message: "Не вказаний ідентифікатор користувача" });
  }

  // Запит до бази даних на отримання користувача за його ідентифікатором
  const query = "SELECT * FROM users WHERE id=?";
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error("Помилка при отриманні користувача:", err);
      return res.status(500).json({ message: "Помилка на сервері" });
    }

    // Перевірка, чи користувач знайдений
    if (result.length === 0) {
      return res.status(404).json({ message: "Користувач не знайдений" });
    }

    // Якщо користувач успішно знайдений
    return res.status(200).json(result[0]);
  });
};
exports.createUser = (req, res) => {
  const { firstName, lastName, email, brandName, firebaseId, photo } = req.body;

  // Перевірка, чи всі необхідні дані були надіслані
  if (
    !firstName ||
    !lastName ||
    !email ||
    !brandName ||
    !firebaseId ||
    !photo
  ) {
    return res.status(400).json({ message: "Будь ласка, заповніть всі поля" });
  }

  // Запит до бази даних на додавання нового користувача
  const query = `INSERT INTO users (first_name, last_name, email, brand_name, firebase_id, photo) 
                   VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    query,
    [firstName, lastName, email, brandName, firebaseId, photo],
    (err, result) => {
      if (err) {
        console.error("Помилка при створенні користувача:", err);
        return res.status(500).json({ message: "Помилка на сервері" });
      }

      // Якщо запис успішно додано до бази даних
      return res
        .status(200)
        .json({ status: "success", message: "Користувач успішно створений" });
    }
  );
};

exports.updateUser = (req, res) => {};
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  // Перевірка, чи був наданий ідентифікатор користувача
  if (!userId) {
    return res
      .status(400)
      .json({ message: "Не вказаний ідентифікатор користувача" });
  }

  // Запит до бази даних на видалення користувача за його ідентифікатором
  const query = "DELETE FROM users WHERE id=?";
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error("Помилка при видаленні користувача:", err);
      return res.status(500).json({ message: "Помилка на сервері" });
    }

    // Якщо користувача успішно видалено
    return res
      .status(200)
      .json({ status: "success", message: "Користувач успішно видалений" });
  });
};
