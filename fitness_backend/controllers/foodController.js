
/// Foods controller, handles all the logic for the foods routes

const express = require('express');
const food = require('../models/foods');

exports.foodList = async (req, res, next) => {
    res.send("Not implemented yet");

}

exports.foodDetail = async (req, res, next) => {
    res.send("Not implemented yet, food id is " + req.params.id);
}

foodCreateGet = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.foodCreatePost = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.foodUpdateGet = async (req, res, next) => {
    res.send("Not implemented yet");

}

exports.foodUpdatePost = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.foodDeleteGet = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.foodDeletePost = async (req, res, next) => {
    res.send("Not implemented yet");
}

