const express = require("express");
const router = express.Router();
const moviesController = require("../controller/MoviesController");

router.get("/", moviesController.index);
router.post("/", moviesController.insert);
router.put("/:id", moviesController.update);
router.delete("/:id", moviesController.remove);
router.get("/:id", moviesController.show);

module.exports = router;
