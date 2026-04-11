
/// Defining functions to interact with My_fitness_db through MySQL

const db = require('../config/database');

exports.getAllEntries = function(callback) {
    db.query('SELECT * FROM entries', callback);
};

exports.getEntryById = function(id, callback) {
    db.query('SELECT * FROM entries WHERE id = ?', [id], callback);
};

exports.createEntry = function(newEntry, callback) {
    db.query('INSERT INTO entries SET ?', newEntry, callback);
};

exports.updateEntry = function(id, updatedEntry, callback) {
    db.query('UPDATE entries SET ? WHERE id = ?', [updatedEntry, id], callback);
};

exports.deleteEntry = function(id, callback) {
    db.query('DELETE FROM entries WHERE id = ?', [id], callback);
};



