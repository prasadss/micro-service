
const express = require("express");
const router = express.Router();
const movieController = require("../controller/MovieController");

router.get("/", movieController.index);
router.post("/", movieController.insert);
router.put("/:id", movieController.update);
router.delete("/:id", movieController.remove);
router.get("/:id", movieController.show);

module.exports = router;
