
const express = require("express");
const router = express.Router();
const genreController = require("../controller/GenreController");

router.get("/", genreController.index);
router.post("/", genreController.insert);
router.put("/:id", genreController.update);
router.delete("/:id", genreController.remove);
router.get("/:id", genreController.show);

module.exports = router;
