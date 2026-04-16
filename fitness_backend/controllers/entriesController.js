

const express = require("express");
const entries = require("../services/entries");

exports.entriesList = async (req, res, next) => {
    try {
        const allEntries = await entries.getAllEntries();
        res.json(allEntries); 
    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ error: 'Failed to retrieve entries', details: err.message });
    }

};

exports.createEntry = async (req, res, next) => {
    try {
        const newEntry = await entries.createEntry(req.body);
        res.status(201).json(newEntry);
    } catch (err) {
        console.error("ERROR:", err);

        res.status(500).json({ error: 'Failed to create entries', details: err.message});
        
    }
};


exports.entryDetail = async (req, res, next) => {
    try {
        const entry = await entries.getEntryByID(req.params.id);
        res.json(entry);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve entry' });
    }
};


exports.deleteEntry = async (req, res, next) => {
    try {
        await entries.deleteEntry(req.params.id);
        res.json({ message: 'Entry deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete entry' });
    }
};


