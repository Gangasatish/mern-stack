import express from 'express';
const router = express.Router();

// Router-Level middleware
const RouterMiddleware = (req, res, next) => {
  console.log("I am a middleware from Blog Page");
  next()
}
router.use(RouterMiddleware)


router.get('/', (req, res) => {
    res.send(`<h1>This is Blog Page and the method is ${req.method}</h1>`)
}).get('/about', (req, res) => {
    res.send(`<h1>This is Blog About Page and the method is ${req.method}</h1>`)
}).post('/', (req, res) => {
    res.send(`<h1>This is Blog Page and the method is ${req.method}</h1>`)
}).put('/', (req, res) => {
    res.send(`<h1>This is Blog Page and the method is ${req.method}</h1>`)
}).delete('/', (req, res) => {
    res.send(`<h1>This is Blog Page and the method is ${req.method}</h1>`)
}).get('/:id', (req, res) => {
    res.send(`<h1>This is Blog Page and the name is ${req.params.id}</h1>`)
})

export default router;