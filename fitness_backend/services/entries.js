
/// Defining functions to interact with My_fitness_db through MySQL

const db = require('../config/database');



exports.getAllEntries = async (userId) => {

    const [rows] = await db.execute(`
        SELECT e.id, DATE_FORMAT(e.date, "%Y-%m-%d") as date, e.food_id, f.name, e.servings, f.calories_per_serving, f.protein, f.carbs, f.fat, f.fibre, f.sodium
        FROM entries e
        JOIN foods f ON e.food_id = f.id
        WHERE e.user_id = ?
        ORDER BY date DESC
    `);
    return rows;
};

exports.getEntryByID = async (id, userId) => {
    const [rows] = await db.execute(`
        select e.id, DATE_FORMAT(e.date, "%Y-%m-%d") as date, e.food_id, f.name, e.servings, f.calories_per_serving, f.protein, f.carbs, f.fat, f.fibre, f.sodium 
        from entries e
        join foods f on e.food_id = f.id
        where e.id = ? AND e.user_id = ?`, [id, userId]);
    return rows[0];

};


exports.createEntry = async ({ food_id, servings, date, userId }) => {

    const [result] = await db.execute(
        `INSERT INTO entries (user_id, food_id, servings, date)
         VALUES (?, ?, ?, ?)`,
        [userId, food_id, servings, date]
    );
    return result.insertId;
};


exports.deleteEntry = async (id, userId) => {
    await db.execute('DELETE FROM entries WHERE id = ? AND user_id = ?', [id, userId]);
};


/// Daily Calories Calculation 

exports.getDailyCalories = async (date, userId) => {
    const [rows] = await db.execute(`
        SELECT SUM(f.calories_per_serving * e.servings) AS total_calories
        FROM entries e
        JOIN foods f ON e.food_id = f.id
        WHERE e.date = ? AND e.user_id = ?`, [date, userId]);
    return { total_calories: rows[0].total_calories || 0 }; // Return 0 if no entries found
};


