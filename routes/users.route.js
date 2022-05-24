const express = require("express");
const {
  AddUser,
  FindAllUsers,
  FindSinglUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.post("/users", AddUser);
router.get("/users", FindAllUsers);
router.get("/users/:id", FindSinglUser);
router.put("/users/:id", UpdateUser);
router.delete("/users/:id", DeleteUser);

module.exports = router;
