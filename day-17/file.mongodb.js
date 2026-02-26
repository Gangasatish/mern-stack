use('collec2');
db.heroes.deleteMany({});
db.heroes.insertOne({
    name: "Steven Strange",
    age: 34,
    // nested documents
    address: {
        city: "New York",
        country: "USA",
    },
});
db.heroes.insertOne({
    name: "Tony Stark",
    age: 34,
    // nested documents
    address: {
        city: "New York",
        country: "USA",
    },
    // arrays
    skills: ["Genius", "Billionaire", "Playboy", "Phillanthropist"],
});
db.heroes.insertOne({
    name: "Peter Parker",
    age: 16,
    address: {
        city: "Brooklyn",
        country: "USA",
    }
})


// db.heroes.find({ "address.city": "Brooklyn" });
// db.heroes.find({skills: "Genius"});
// db.heroes.find({skills: 
//     {$in: ["Genius", "Playboy"]}
// }); // if you want to project a document using multiple element that contains either one of the element in the array.

// db.heroes.find({
//     skills:
//         { $all: ["Genius", "Playboy"] }
// }); // if you want to project a document using multiple element that contains all of the elements in the array.
// db.heroes.find({
//     skills: ["Genius", "Billionaire", "Playboy", "Phillanthropist"]
// })

// db.heroes.find({
//     skills: {$size: 4},
// }) // find the document which has exactly 4 elements

// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $push: { skills: "Crafter" } }
// ) // push an element into the array
// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $push: { skills: "Billionaire" } }
// ) // push an element into the array
// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $addToSet: { skills: "Billionaire" } }
// ) // push an element into the array only if it is unique
// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     {
//         $push: {
//             skills: {
//                 $each: ["crafter", "engineer"]
//             }
//         }
//     }
// )
// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $pop: { skills: 1 } } // -1 - delete from the 0th index, 1 - delete from the last index
// )
// db.heroes.updateOne( // removes the element from the array
//     { name: "Tony Stark" },
//     { $pull: { skills: "Billionaire" } }
// )

// db.heroes.updateOne(
//     {name: "Tony Stark"},
//     {$set: {"address.city" : "Queens"}}
// ) // updating nested documents

// db.heroes.findOne({ name: "Tony Stark" })

// db.heroes.updateOne(
//     {name: "Tony Stark"},
//     {$unset: {age: ""}}
//     // removes a field from the document
// )

// db.heroes.findOne({ name: "Tony Stark" }, {name: 1, _id: 0}) // 1 - visible, 0 - not visible. inside a parameter, both 1 and 0 cannot exist, _id is the only exception

// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     {$inc: {age: 6}} // increment operator
// )

// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $mul: { age: 1.5 } } // multiply operator
// )

// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $rename: { skills: "skillSet" } } // renames the field
// )

// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $max: { kills: 10 } }
// )
// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $max: { kills: 12 } }
//     // updates the maximum number between the two
// )
// db.heroes.updateOne(
//     { name: "Tony Stark" },
//     { $min: { kills: 9 } }
//     // updates the minimum number between the two
// )

// db.heroes.replaceOne(
//     { name: "Tony Stark" },
//     {
//             name: "Tony",
//             roll: 10,
//     }
//     // replaces the old document with the new one. It permanently deletes the old document.
// )
// db.heroes.replaceMany() // replaces multiple old documents with the new one. It permanently deletes the old documents.

// db.heroes.updateOne(
//     {name: "Kamala Khan"},
//     {$set: {
//         age: 16,
//         powers: "Noor",
//     }},
//     {upsert: true} // create the document if it doesn't exist
// )

// db.heroes.find({ name: "Kamala Khan" })
