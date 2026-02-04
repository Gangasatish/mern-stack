import express from 'express'
import {fileURLToPath} from 'url';
import {join, dirname} from 'path';

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.json());
app.use(express.static('Public'));

function authCheck(req, res, next){
    const {isAuth} = req.body;
    if (isAuth === "true") {
        next()
    }
    else{
        res.sendFile(join(__dirname, 'Templates/error.html'));
    }
}

app.get('/', (req, res) => {
    res.sendFile('index.html');

})
app.post('/blog', authCheck, (req, res) => {
  res.sendFile(join(__dirname, 'Templates/blog.html'))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))