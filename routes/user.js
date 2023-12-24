const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

router
  .route("/")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
  });

router
  .route("/:id")
  .get((req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  })
  .put((req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    users = users.map((u) => (u.id === userId ? updatedUser : u));

    res.json(updatedUser);
  })
  .delete((req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((u) => u.id !== userId);
    res.json({ message: "User deleted successfully" });
  });

module.exports = router;
