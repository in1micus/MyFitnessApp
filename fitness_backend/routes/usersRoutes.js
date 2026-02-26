/// Defines routes for user pages

const express = require("express");

// Require modules

const userController = require("../controllers/userController");

const router = express.Router();

// ROUTES //

// GET and POST request for creating a user

router.get("/register", userController.userCreateGet);

router.post("/register", userController.userCreatePost);

// GET and POST request for updating a user

router.get("/user/:id/update", userController.userUpdateGet);

router.post("/user/:id/update", userController.userUpdatePost);

// GET and POST request for removing a user

router.get("/user/:id/delete", userController.userDeleteGet);

router.post("/user/:id/delete", userController.userDeletePost);

// GET request for list of users

// router.get("/users", userController.userList)

// GET request for user details

router.get("user/:id/info", userController.userDetail);

module.exports = router;

