
/// Defining functions to interact with My_fitness_db through MySQL

const db = require('../config/database');

exports.getAllEntries = async () => {

    const [rows] = await db.execute(`
        SELECT e.*, f.name, f.calories_per_serving, f.protein, f.carbs, f.fat, f.fibre, f.sodium 
        FROM entries e
        JOIN foods f ON e.food_id = f.id
        ORDER BY entry_date DESC
    `);
    return rows;
};

exports.getEntryByID = async (id) => {
    const [rows] = await db.execute(`
        select * from entries where id = ?`, [id]);
    return rows;

};


exports.createEntry = async ({ food_id, servings, entry_date }) => {
    const [result] = await db.execute(
        `INSERT INTO entries (food_id, servings, entry_date)
         VALUES (?, ?, ?)`,
        [food_id, servings, entry_date]
    );
    return result.insertId;
};


exports.deleteEntry = async (id) => {
    await db.execute('DELETE FROM entries WHERE id = ?', [id]);
};



