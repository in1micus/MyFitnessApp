
/// Defining functions to interact with My_fitness_db through MySQL

const db = require('../config/database');

exports.getAllEntries = async () => {

    const [rows] = await db.execute(`
        SELECT e.id, DATE_FORMAT(e.date, "%Y-%m-%d") as date, e.food_id, f.name, e.servings, f.calories_per_serving, f.protein, f.carbs, f.fat, f.fibre, f.sodium
        FROM entries e
        JOIN foods f ON e.food_id = f.id
        ORDER BY date DESC
    `);
    return rows;
};

exports.getEntryByID = async (id) => {
    const [rows] = await db.execute(`
        select e.id, DATE_FORMAT(e.date, "%Y-%m-%d") as date, e.food_id, f.name, e.servings, f.calories_per_serving, f.protein, f.carbs, f.fat, f.fibre, f.sodium 
        from entries e
        join foods f on e.food_id = f.id
        where e.id = ?`, [id]);
    return rows;

};


exports.createEntry = async ({ food_id, servings, date }) => {
    const [result] = await db.execute(
        `INSERT INTO entries (food_id, servings, date)
         VALUES (?, ?, ?)`,
        [food_id, servings, date]
    );
    return result.insertId;
};


exports.deleteEntry = async (id) => {
    await db.execute('DELETE FROM entries WHERE id = ?', [id]);
};


/// Daily Calories Calculation 

exports.getDailyCalories = async (date) => {
    const [rows] = await db.execute(`
        SELECT SUM(f.calories_per_serving * e.servings) AS total_calories
        FROM entries e
        JOIN foods f ON e.food_id = f.id
        WHERE e.date = ?`, [date]);
    return { total_calories: rows[0].total_calories || 0 }; // Return 0 if no entries found
};


