/// Defines routes for food pages

const express = require("express");

// Require modules

const foodController = require("../controllers/foodController");

const router = express.Router();

// ROUTES //

// GET and POST for creating/updating/deleting a food item


router.get("/newfood", foodController.foodCreateGet);

router.post("/newfood", foodController.foodCreatePost);

router.get("/food/:id/update", foodController.foodCreateGet);

router.post("/food/:id/update", foodController.foodCreatePost);

router.get("/food/:id/delete", foodController.foodCreateGet);

router.post("/food/:id/delete", foodController.foodCreatePost);

// GET request for list of foods and details for one food

router.get("/foods", foodController.foodList);

router.get("food/:id/info", foodController.foodDetail);

module.exports = router;

