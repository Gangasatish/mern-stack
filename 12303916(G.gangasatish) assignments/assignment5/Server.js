import express from 'express';

const app = express();
const port = 3000;

app.get('/Adi/:hero?', (req, res) => {
    let hero = req.params.hero;
    
    // Handle empty or missing hero parameter
    if (!hero || hero.trim() === '') {
        return res.status(400).send({ error: 'Hero parameter is required' });
    }
    
    // Capitalize the first letter
    hero = hero.charAt(0).toUpperCase() + hero.slice(1).toLowerCase();
    res.send(`Hello World! ${hero}`);
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).send({ error: 'Route not found' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
