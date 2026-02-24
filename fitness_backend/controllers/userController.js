
/// Foods controller, handles all the logic for the foods routes

const express = require('express');
const user = require('../models/users');

exports.userList = async (req, res, next) => {
    res.send("Not implemented yet");

}

exports.userDetail = async (req, res, next) => {
    res.send("Not implemented yet, user id is " + req.params.id);
}

exports.userCreateGet = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.userCreatePost = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.userUpdateGet = async (req, res, next) => {
    res.send("Not implemented yet");

}

exports.userUpdatePost = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.userDeleteGet = async (req, res, next) => {
    res.send("Not implemented yet");
}

exports.userDeletePost = async (req, res, next) => {
    res.send("Not implemented yet");
}

