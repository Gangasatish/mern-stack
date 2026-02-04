import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

function isAuth(req, res, next) {
    let isAuth = req.body.auth;
    // const isLoggedIn = "false";
    if (isAuth)
        next();
    else
        res.sendFile(path.join(__dirname, 'public/error.html'));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/dashboard', isAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dashboard.html'));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
