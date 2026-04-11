
/// Defining functions to interact with My_fitness_db through MySQL

const db = require('../config/database');

exports.getAllFoods = async () => {
    const [rows] = await db.execute('SELECT * FROM foods');
    return rows;
};

exports.getFoodById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM foods WHERE id = ?', [id]);
    return rows[0];
};

exports.createFood = async (food) => {
    const [result] = await db.execute(
        `INSERT INTO foods (name, calories, protein, carbs, fat, fibre, sodium)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [food.name, food.calories, food.protein, food.carbs, food.fat, food.fibre, food.sodium]
    );
    return result.insertId;
};

exports.updateFood = async (id, food) => {
    await db.execute(
        `UPDATE foods 
         SET name=?, calories=?, protein=?, carbs=?, fat=?, fibre=?, sodium=?
         WHERE id=?`,
        [food.name, food.calories, food.protein, food.carbs, food.fat, food.fibre, food.sodium, id]
    );
};


exports.deleteFood = async (id) => {
    await db.execute('DELETE FROM foods WHERE id = ?', [id]);
};



