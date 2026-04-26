

const auth = require('../services/auth');

exports.register = async (req, res) => {
    try {
        const userId = await auth.register(req.body);
        res.status(201).json({ message: "User registered", userId });
    } catch (error) {
        console.error("Error in register:", error);
        res.status(400).json({ error: error.message, details: error });
    };
};

exports.login = async (req, res) => {
    try {
        const token = await auth.login(req.body);
        res.json({ token });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(401).json({ error: "Invalid credentials", details: error });
    };
};


