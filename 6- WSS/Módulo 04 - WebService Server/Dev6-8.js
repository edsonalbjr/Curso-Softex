const express = require("express");
const router = express.Router();

// Dummy data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Create (C)
router.post("/", (req, res) => {
  let item = req.body;
  item.id = items.length + 1;
  items.push(item);
  res.send(item);
});

// Read (R)
router.get("/", (req, res) => {
  res.send(items);
});

router.get("/:id", (req, res) => {
  let item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    res.send(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Update (U)
router.put("/:id", (req, res) => {
  let item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    item.name = req.body.name;
    res.send(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Delete (D)
router.delete("/:id", (req, res) => {
  let itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.send("Item deleted");
  } else {
    res.status(404).send("Item not found");
  }
});

module.exports = router;
