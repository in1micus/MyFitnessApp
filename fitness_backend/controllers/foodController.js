
/// Foods controller, handles all the logic for the foods routes

const express = require('express');
const food = require('../services/foods');

exports.foodList = async (req, res, next) => {
    try {
        const foods = await food.getAllFoods();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve foods' });
    }

}

exports.foodDetail = async (req, res, next) => {
    try {
        const foodItem = await food.getFoodById(req.params.id);
        if (!foodItem) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.json(foodItem);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve food information' });
    }
}

exports.createFood = async (req, res, next) => {
    try {
        const newFoodId = await food.createFood(req.body);
        res.status(201).json({ id: newFoodId });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create food' });
    }
}

exports.updateFood = async (req, res, next) => {
    try {
        await food.updateFood(req.params.id, req.body);
        res.json({ message: 'Food updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update food' });
    }
}

exports.deleteFood = async (req, res, next) => {
    try {
        await food.deleteFood(req.params.id);
        res.json({ message: 'Food deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete food' });
    }
}

