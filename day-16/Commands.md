# MongoDB Commands

## show dbs - display all the databases present in the cluster.
## use db_name - creates a database if not present, and then switch to the said database.
## show collections - Display all the collections in the said database.
## db - reference to the database you are currently in.
## db.createCollection - Creates a collection inside the said database.
## db.col_name.insertOne({ }) - creates a collection if not present, and insert a single document in that collection.
## db.col_name.insertMany([ { }, { }, { } ]) - creates a collection if not present, and insert multiple document in that collection.
## db.col_name.findOne() - displays the first document inside the collection.
## db.col_name.findOne({ }) - displays the first document inside the collection that matches the parameter(s).
## db.col_name.find() - displays all the documents inside the collection.
## db.col_name.find({ }) - displays all the documents inside the collection that matches the parameter(s).
## db.col_name.find().pretty() - displays the documents in a human readable format
## db.col_name.renameCollection() - Rename the selected collection
## db.col_name.updateOne() - updates one document
## db.col_name.updateMany() - updates multiple documents
## db.col_name.deleteOne({}) - deletes one document (Empty object will delete the first document)
## db.col_name.deleteMany({}) - deletes multiple documents(Empty object will delete all the documents)
## db.col_name.drop() - drops/deletes the col_name collection
## db.dropDatabase() - drops/deletes the selected database.

## Data Types: String, Number(int, double), Boolean, Date, Null, ObjectId, Arrays, objects 

# _id: ObjectId('698ab63c8f194e2dd4228fb8')
- An ObjectId is the default data type used in _id
## An ObjectId is 12 bytes which containes:
- 4 bytes - Timestamp when the document is created
- 5 bytes - machine(server) and process identifier
- 3 bytes - counter to avoid duplication

## _id is immutable so once it has been created, it cannot be changed.