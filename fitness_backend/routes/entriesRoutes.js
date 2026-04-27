
const express = require("express");

// Require modules

const entriesController = require("../controllers/entriesController");

const auth = require("../middleware/authMiddleware");``

const router = express.Router();

// RESTful API ROUTES //


router.get("/", auth, entriesController.entriesList);

router.post("/", auth, entriesController.createEntry);

router.get("/day", auth, entriesController.dailyCalories);



/// :id routes must be defined last to avoid conflicts with other routes like /day


router.get("/:id", auth, entriesController.entryDetail);

router.delete("/:id", auth, entriesController.deleteEntry);



module.exports = router;

