
const express = require("express");

// Require modules

const entriesController = require("../controllers/entriesController");

const router = express.Router();

// RESTful API ROUTES //


router.get("/", entriesController.entriesList);

router.post("/", entriesController.createEntry);

router.get("/day", entriesController.dailyCalories);



/// :id routes must be defined last to avoid conflicts with other routes like /day


router.get("/:id", entriesController.entryDetail);

router.delete("/:id", entriesController.deleteEntry);



module.exports = router;

