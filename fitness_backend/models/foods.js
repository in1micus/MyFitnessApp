
/// Defining functions to interact with My_fitness_db through MySQL

const db = require('../config/database');

exports.getAllFoods = function(callback) {
    db.query('SELECT * FROM foods', callback);
};

exports.getFoodById = function(id, callback) {
    db.query('SELECT * FROM foods WHERE id = ?', [id], callback);
};

exports.createFood = function(newFood, callback) {
    db.query('INSERT INTO foods SET ?', newFood, callback);
};

exports.updateFood = function(id, updatedFood, callback) {
    db.query('UPDATE foods SET ? WHERE id = ?', [updatedFood, id], callback);
};

exports.deleteFood = function(id, callback) {
    db.query('DELETE FROM foods WHERE id = ?', [id], callback);
};



