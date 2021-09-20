const express = require("express");
const router = express.Router();
const genereController = require("../controller/GenreController");

router.get("/", genereController.index);
router.post("/", genereController.insert);
router.put("/:id", genereController.update);
router.delete("/:id", genereController.remove);
router.get("/:id", genereController.show);

module.exports = router;
