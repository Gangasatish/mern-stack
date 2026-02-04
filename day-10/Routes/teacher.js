import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`<h1>This is Teacher Page and the method is ${req.method}</h1>`)
}).post('', (req, res) => {
    res.send(`<h1>This is Teacher Page and the method is ${req.method}</h1>`)
}).put('/', (req, res) => {
    res.send(`<h1>This is Teacher Page and the method is ${req.method}</h1>`)
}).delete('/', (req, res) => {
    res.send(`<h1>This is Teacher Page and the method is ${req.method}</h1>`)
})

export default router;