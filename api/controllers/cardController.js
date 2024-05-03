const db = require("../config/database.js");
exports.createCard = (req, res) => {
  const { vendors_id, provider, card_holder, card_number, is_active } =
    req.body;

  const query =
    "INSERT INTO vendors_card (vendors_id, provider, card_holder, card_number, is_active) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [vendors_id, provider, card_holder, card_number, is_active],
    (err, result) => {
      if (err) {
        console.error("Error creating card:", err);
        return res
          .status(500)
          .json({ success: false, error: "Failed to create card" });
      }

      res.status(201).json({ success: true, data: result });
    }
  );
};

exports.getCardById = (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM vendors_card WHERE vendors_id = ?";
  db.query(query, [id], (err, cards) => {
    if (err) {
      console.error("Error fetching cards by vendor id:", err);
      return res
        .status(500)
        .json({ success: false, error: "Failed to fetch cards" });
    }

    res.status(200).json({ success: true, data: cards });
  });
};

exports.deleteCard = (req, res) => {
  const { vendors_id } = req.params;

  const query = "DELETE FROM vendors_card WHERE vendors_id = ?";
  db.query(query, [vendors_id], (err, result) => {
    if (err) {
      console.error("Error deleting card by vendor id:", err);
      return res
        .status(500)
        .json({ success: false, error: "Failed to delete card" });
    }

    res
      .status(200)
      .json({ success: true, message: "Card deleted successfully" });
  });
};

exports.updateCard = (req, res) => {
  const { id } = req.params;
  const { is_active } = req.body;

  const query = "UPDATE vendors_card SET is_active = ? WHERE id = ?";
  db.query(query, [is_active, id], (err, result) => {
    if (err) {
      console.error("Error updating card by id:", err);
      return res
        .status(500)
        .json({ success: false, error: "Failed to update card" });
    }

    res
      .status(200)
      .json({ success: true, message: "Card updated successfully" });
  });
};
