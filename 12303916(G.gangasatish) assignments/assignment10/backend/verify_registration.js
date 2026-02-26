const axios = require('axios');
const mongoose = require('mongoose');
const User = require('./models/User');

async function verify() {
    try {
        // 1. Register a user
        console.log('Registering user...');
        const userData = {
            username: 'verifyuser',
            email: 'verify@example.com',
            password: 'verifypassword'
        };

        try {
            await axios.post('http://localhost:5000/register', userData);
            console.log('User registered successfully via API.');
        } catch (e) {
            console.log('Registration failed (might already exist):', e.response?.data || e.message);
        }

        // 2. Check Database
        console.log('Checking database...');
        // Connect to the same DB as server.js
        await mongoose.connect('mongodb://127.0.0.1:27017/assignment10');

        const user = await User.findOne({ email: 'verify@example.com' });

        if (user) {
            console.log('User found in database:', user.username);
            console.log('Password hash:', user.password);

            // Basic bcrypt hash check (starts with $2b$, $2a$, or $2y$)
            if (user.password !== 'verifypassword' && user.password.startsWith('$2')) {
                console.log('SUCCESS: Password is hashed.');
            } else {
                console.log('FAILURE: Password is NOT hashed correctly.');
            }
        } else {
            console.log('FAILURE: User not found in database.');
        }

    } catch (error) {
        console.error('Verification failed:', error);
    } finally {
        await mongoose.disconnect();
    }
}

verify();
