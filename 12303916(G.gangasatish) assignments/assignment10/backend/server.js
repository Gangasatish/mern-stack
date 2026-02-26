require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./models/User');

const app = express();

app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET || 'your_fallback_secret';

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/assignment10', {
    serverSelectionTimeoutMS: 5000
})
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });

// Registration Route
app.post('/register', async (req, res) => {
    console.log('Received registration request:', req.body);
    try {
        const { username, email, password, role } = req.body;

        // Check existing
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ username, email, password, role: role || 'user' });
        await newUser.save();
        console.log('User registered:', username, 'with role:', newUser.role);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Middleware for RBAC
const authorize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Forbidden: Access denied' });
            }

            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
};

// Protected Routes
app.get('/user-profile', authorize(), (req, res) => {
    res.json({ message: 'Welcome to your profile', user: req.user });
});

app.get('/admin-only', authorize('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin' });
});

app.get('/mod-only', authorize(['admin', 'moderator']), (req, res) => {
    res.json({ message: 'Welcome Admin or Moderator' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
