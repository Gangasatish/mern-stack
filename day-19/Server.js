import express from 'express'
import connection from './Connections/connection.js'
import User from './Schema/UserSchema.js'
const app = express()
const port = 3000

//Connect To the database
app.use(express.json())
// express.json is used to parse the json body. express.urlencoded is used to parse the form body.
connection()
// fetch all the data from users collection
app.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users)
})

app.get('/:id', async(req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user);
}
)

// posting data from users collection
app.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

//updating a document using its ID
app.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        if (!updatedUser) {
            return res.json(404).json({ message: "User not found" })
        }
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// delete all the documents
app.delete('/', async (req, res) => {
  try {
    await User.deleteMany({})
    res.json({message : "All the users are deleted"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}
)
// delete a document using its ID
app.delete('/:id', async(req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        if (!deleteUser){
            return res.json(404).json({ message: "User not found" })
        }
        res.json({message: "User has been deleted sucessfully!"})
    } catch (error) {
      res.status(400).json({ error: error.message })
    
  }
}
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))