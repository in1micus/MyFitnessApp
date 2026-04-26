
require ('dotenv').config(); // Load environment variables from .env file

module.exports = {

    jwtSecret: process.env.JWT_SECRET
    
}

