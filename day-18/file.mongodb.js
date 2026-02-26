use("dcCharacters");
// db.heroes.deleteMany({});
// db.villains.deleteMany({});

// insert documents into heroes collection
// db.heroes.insertMany([
//     {

//         name: "Bruce Wayne",
//         hero_name: "Batman",
//         age: 35,
//         gender: "male",
//         powers: ["Genius-level intellect", "Martial arts mastery", "Advanced technology", "Stealth"]
//     },
//     {

//         name: "Clark Kent",
//         hero_name: "Superman",
//         age: 33,
//         gender: "male",
//         powers: ["Super strength", "Flight", "Heat vision", "X-ray vision", "Super speed"]
//     },
//     {

//         name: "Diana Prince",
//         hero_name: "Wonder Woman",
//         age: 3000,
//         gender: "female",
//         powers: ["Super strength", "Combat skill", "Lasso of Truth", "Immortality"]
//     },
//     {

//         name: "Barry Allen",
//         hero_name: "Flash",
//         age: 28,
//         gender: "male",
//         powers: ["Super speed", "Time travel", "Phasing", "Accelerated healing"]
//     },
//     {

//         name: "Hal Jordan",
//         hero_name: "Green Lantern",
//         age: 32,
//         gender: "male",
//         powers: ["Power ring constructs", "Flight", "Energy projection", "Force fields"]
//     },
//     {

//         name: "Arthur Curry",
//         hero_name: "Aquaman",
//         age: 34,
//         gender: "male",
//         powers: ["Underwater breathing", "Telepathy with sea life", "Super strength", "Trident mastery"]
//     },
//     {

//         name: "Victor Stone",
//         hero_name: "Cyborg",
//         age: 25,
//         gender: "male",
//         powers: ["Cybernetic enhancements", "Technopathy", "Super strength", "Advanced weapon systems"]
//     },
//     {

//         name: "Selina Kyle",
//         hero_name: "Catwoman",
//         age: 30,
//         gender: "female",
//         powers: ["Acrobatics", "Stealth", "Expert thief", "Hand-to-hand combat"]
//     },
//     {

//         name: "Billy Batson",
//         hero_name: "Shazam",
//         age: 16,
//         gender: "male",
//         powers: ["Magic lightning", "Super strength", "Flight", "Wisdom of Solomon"]
//     },
//     {

//         name: "Oliver Queen",
//         hero_name: "Green Arrow",
//         age: 34,
//         gender: "male",
//         powers: ["Expert archer", "Martial arts", "Tactical intelligence"]
//     }
// ])

// insert documents into villains collections

// db.villains.insertMany([
//     {

//         name: "Joker",
//         real_name: "Unknown",
//         age: 40,
//         gender: "male",
//         powers: ["Criminal mastermind", "Psychological manipulation", "Expert chemist"],
//         nemesis: "Batman"
//     },
//     {

//         name: "Lex Luthor",
//         real_name: "Lex Luthor",
//         age: 45,
//         gender: "male",
//         powers: ["Genius-level intellect", "Advanced technology", "Business empire"],
//         nemesis: "Superman"
//     },
//     {

//         name: "Cheetah",
//         real_name: "Barbara Minerva",
//         age: 32,
//         gender: "female",
//         powers: ["Super speed", "Enhanced strength", "Sharp claws"],
//         nemesis: "Wonder Woman"
//     },
//     {

//         name: "Reverse-Flash",
//         real_name: "Eobard Thawne",
//         age: 38,
//         gender: "male",
//         powers: ["Super speed", "Time travel", "Negative Speed Force"],
//         nemesis: "Flash"
//     },
//     {

//         name: "Black Manta",
//         real_name: "David Hyde",
//         age: 36,
//         gender: "male",
//         powers: ["Underwater combat", "Advanced armor", "Laser beams"],
//         nemesis: "Aquaman"
//     },
//     {

//         name: "Darkseid",
//         real_name: "Uxas",
//         age: 10000,
//         gender: "male",
//         powers: ["Omega beams", "Super strength", "Immortality"],
//         nemesis: "Superman"
//     }
// ]
// )

// db.heroes.aggregate([
//     {$match: {gender: "female"} }
// ]) // matches the stage

// db.heroes.aggregate([
//     {
//         $group: {
//             _id: "$gender",
//             total: { $sum: 1 }
//         }
//     },
//     {$out: "genderRolls"} // export the aggregated data into a new collection
// ]) // groups the documents based on a certain field

// db.genderRolls.find()

// db.heroes.aggregate([
//     {
//         $project: {
//             hero_name: 1,
//             powers: 1,
//             _id: 0,
//         }
//     }
// ]) // show or modify fields 

// db.heroes.aggregate([
//     {$sort: {age: 1}}
// ]) // sort documents based on a field

// db.heroes.aggregate([
//     { $sort: { age: 1 } },
//     { $limit: 3 }, // limit the number of documents
//     {
//         $project: {
//             hero_name: 1,
//             powers: 1,
//             _id: 0
//         }
//     }
// ])

// db.heroes.aggregate([
//     {
//         $lookup: {
//             from: "villains", // select the collection from where the data will be fetched 
//             localField: "hero_name", // field present in the current collection that will be used for connection
//             foreignField: "nemesis", // field present in the foreign collection that will be used for connection
//             as: "villainDetails" // name of the new field that will be contain the fetched data
//         }
//     },
//     {$unwind: "$villainDetails"}, // to make it more readable and unwind the array
//     {$project: {_id: 0}},

//     {$out: "characterList"}
// ]) // join 2 collections just like join in SQL

// db.heroes.aggregate([
//     {$merge: {
//         into: "characterList",
//         on: "_id",
//         whenMatched: "merge",
//         whenNotMatched: "insert"
//     }}
// ]) // does the same thing but more efficiently without replacing the older documents.

// db.characterList.find()

// comparision operators
// db.heroes.find({
//     // age: {$ne: 3000}
//     // age: {$eq: 3000}
//     // age: {$lte: 3000}
//     // age: {$gte: 3000}
//     // age: {$gt: 3000}
//     // age: {$lt: 3000}
// })

// logical operators

// db.heroes.find({
//     // $or: [
//     //     { age: { $gt: 50 } },
//     //     { gender: "female" }
//     // ]
//     // $and: [
//     //     { age: { $gt: 20 } },
//     //     { gender: "female" }

//     // ]

// })

// Element Operators

// db.heroes.find({
//     // age: {$exists: true}// check if the field exists or not
//     age: { $type: "string" }
//     // types: int, string, double, object, array, bool, date, long, ObjectId
// })

//Evaluation Operators

// db.heroes.find({
//     name: {$regex: "^To"}
// })
db.users.drop()
db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['name', 'email'],
            additionalProperties: false, // prevents insertion of fields that are not defined in the schema.
            properties: {
                name: {
                    bsonType: "string",
                    description: "Name must be a string"
                },
                email: {
                    bsonType: "string",
                    pattern: "^.+@.+$",
                    description: "E-mail must be a string"
                },
                age: {
                    bsonType: 'int',
                    minimum: 18,
                    description: "Age must me an integer"
                }
            }
        }
    }
})

db.runCommand({
    collMod: "users",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['name', 'email'],
            additionalProperties: false, // prevents insertion of fields that are not defined in the schema.
            properties: {
                name: {
                    bsonType: "string",
                    description: "Name must be a string"
                },
                email: {
                    bsonType: "string",
                    pattern: "^.+@.+$",
                    description: "E-mail must be a string"
                },
                age: {
                    bsonType: 'int',
                    minimum: 18,
                    description: "Age must me an integer"
                },
                roll: {
                    bsonType: 'int',
                    minimum: 1,
                    description: "Roll must me an integer"
                }
            }
        }
    }
})
// db.users.deleteMany({})
db.getCollectionInfos({name: "users"})
// db.users.insertOne({
//     name: "John Doe",
//     email: "abc@example.com",
//     age: 25,
//     // roll: 123100
// })
// db.users.find()