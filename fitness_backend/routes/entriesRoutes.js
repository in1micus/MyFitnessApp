
const express = require("express");

// Require modules

const entriesController = require("../controllers/entriesController");

const router = express.Router();

// RESTful API ROUTES //


router.get("/", entriesController.entriesList);

router.post("/", entriesController.createEntry);

router.get("/:id", entriesController.entryDetail);

router.delete("/:id", entriesController.deleteEntry);

module.exports = router;

