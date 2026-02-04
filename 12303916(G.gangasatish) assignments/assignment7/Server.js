import express from 'express';

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('login.html', { root: 'public' });
});

app.post('/api', (req, res) => {
    console.log(`Token is: ${req.body.token}`);
    res.send("Token has been recieved!");
})

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please close the other process or set a different PORT.`);
        process.exit(1);
    } else {
        throw err;
    }
});
