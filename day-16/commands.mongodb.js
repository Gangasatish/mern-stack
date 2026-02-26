
use('collec1'); // select or create a database
// console.log(db.heroes.find()) // find method
db.heroes.deleteMany({ }) // deleteMany method

// insert documents in the heroes collections
db.heroes.insertMany(
    [
        {
            name: 'Tony Stark',
            roll: 43,
            gender: 'male',
            isAlive: true,
            docCreatedAt: new Date(),
        },
        {
            name: 'Steve Rogers',
            roll: 12,
            gender: 'male',
            isAlive: true,
            docCreatedAt: new Date(),
        },
        {
            name: 'Natasha Romanoff',
            roll: 27,
            gender: 'female',
            isAlive: false,
            docCreatedAt: new Date(),
        },
        {
            name: 'Bruce Banner',
            roll: 35,
            gender: 'male',
            isAlive: true,
            docCreatedAt: new Date(),
        },
        {
            name: 'Thor Odinson',
            roll: 18,
            gender: 'male',
            isAlive: true,
            docCreatedAt: new Date(),
        },
        {
            name: 'Clint Barton',
            roll: 41,
            gender: 'male',
            isAlive: true,
            docCreatedAt: new Date(),
        },
        {
            name: 'Wanda Maximoff',
            roll: 22,
            gender: 'female',
            isAlive: true,
            docCreatedAt: new Date(),
        },
        {
            name: 'Vision',
            roll: 30,
            gender: 'male',
            isAlive: false,
            docCreatedAt: new Date(),
        },
        {
            name: 'Peter Parker',
            roll: 16,
            gender: 'male',
            isAlive: true,
            docCreatedAt: new Date(),
        },
        {
            name: 'Stephen Strange',
            roll: 39,
            gender: 'male',
            isAlive: true,
            docCreatedAt: new Date(),
        }
    ]
)
// db.heroes.find() // display all the documents

// db.heroes.countDocuments(); // count the number of documents the collection have.

// db.heroes.find().sort({roll: -1}) // sort the documents. 1 - assending, -1 - descending

// db.heroes.find().limit(2) // to limit the number of documents

// db.heroes.createIndex(
//     {roll: 1},
//     {unique: true}
// ) // with index, it will go straight to the document number. 1 is for assending, -1 is for descending
// db.heroes.insertOne({name: 'Shang Chi', roll: 43})