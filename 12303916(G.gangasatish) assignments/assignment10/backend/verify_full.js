const axios = require('axios');
const mongoose = require('mongoose');
const User = require('./models/User');

async function verify() {
    try {
        // 0. Cleanup
        console.log('Cleaning up...');
        await mongoose.connect('mongodb://127.0.0.1:27017/assignment10');
        await User.deleteOne({ email: 'verify@example.com' });

        // 1. Register a user
        console.log('Registering user...');
        const userData = {
            username: 'verifyuser',
            email: 'verify@example.com',
            password: 'verifypassword'
        };

        try {
            const res = await axios.post('http://localhost:5000/register', userData);
            console.log('API Response:', res.status, res.data);
        } catch (e) {
            console.error('Registration failed:', e.response?.data || e.message);
            process.exit(1);
        }

        // 2. Check Database
        console.log('Checking database for hashed password...');
        const user = await User.findOne({ email: 'verify@example.com' });

        if (user) {
            console.log('User found:', user.username);
            console.log('Stored Password:', user.password);

            const isHashed = user.password.startsWith('$2');
            const isNotPlain = user.password !== 'verifypassword';

            if (isHashed && isNotPlain) {
                console.log('SUCCESS: Password is securely hashed.');
            } else {
                console.error('FAILURE: Password is NOT hashed correctly.');
                process.exit(1);
            }
        } else {
            console.error('FAILURE: User not found in database.');
            process.exit(1);
        }

    } catch (error) {
        console.error('Verification failed:', error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log('Done.');
    }
}

verify();
