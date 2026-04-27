

const express = require("express");
const entries = require("../services/entries");

exports.entriesList = async (req, res, next) => {
    try {
        const allEntries = await entries.getAllEntries(req.user.userId);
        res.json(allEntries); 
    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ error: 'Failed to retrieve entries', details: err.message });
    }

};

exports.createEntry = async (req, res, next) => {
    try {
        const newEntry = await entries.createEntry({ ...req.body, userId : req.user.userId });
        res.status(201).json({ id : newEntry });
    } catch (err) {
        console.error("ERROR:", err);

        res.status(500).json({ error: 'Failed to create entries', details: err.message});
        
    }
};


exports.entryDetail = async (req, res, next) => {
    try {
        const entry = await entries.getEntryByID(req.params.id, req.user.userId);
        if (!entry) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        res.json(entry);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve entry' });
    }
};


exports.deleteEntry = async (req, res, next) => {
    try {
        await entries.deleteEntry(req.params.id, req.user.userId);
        if (!Result.affectedRows) {
            return res.status(404).json({ error: 'Entry not found or not authorized to delete' });
        }
        res.json({ message: 'Entry deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete entry' });
    }
};

// Daily Calories Calculation

exports.dailyCalories = async (req, res) => {
    try {
        const date = req.query.date; // Expecting date in 'YYYY-MM-DD' format
        console.log("Query Date:", req.query.date); // Debugging log
        if (!date) {
            return res.status(400).json({ error: 'Date query parameter is required' });
        }
        const totalCalories = await entries.getDailyCalories(date, req.user.userId);
        res.json(totalCalories);
    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ error: 'Failed to calculate daily calories', details: err.message });

    };
};



