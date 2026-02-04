import express from 'express';
const app = express()
const PORT = 3000;
app.use(express.static('Public'));

// Middleware to read Form Data
// app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile('index.html');
})
app.get('/submit', (req, res) => {
  res.send(`<h1>Welcome: ${req.query.uname}</h1>`)
//   res.json(req.query);
})
app.post('/api', (req, res) => {
    
    console.log(`Token: ${req.body.token}`);
    res.send("Token has been received");
}
)
app.post('/submit', (req, res) => {
//   res.send(`<h1>Welcome: ${req.query.uname}</h1>`)
//   res.json(req.query);

// res.send(`<h1>Welcome: ${req.body.uname} and you password is ${req.body.pass}</h1>`)
// res.json(req.body)
    // res.send(`<h1>${req.body}</h1>`);
    // console.log(`Welcome: ${req.body.uname}`);

    // const {uname} = req.body;
    // res.json({uname});

})

app.get('/submit/:name', (req, res) => {
    res.send(`<h1>Welcome: ${req.params.name}</h1>`);
}
)
app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
}
)