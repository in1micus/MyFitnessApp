/// Defines routes for food pages

const express = require("express");

// Require modules

const foodController = require("../controllers/foodController");

const router = express.Router();

// RESTful API ROUTES //

// GET requests

router.get("/", foodController.foodList);
router.get("/:id", foodController.foodDetail);


// Adding/editing requests

router.post("/", foodController.createFood);
router.put("/:id", foodController.updateFood);
router.delete("/:id", foodController.deleteFood);


module.exports = router;

