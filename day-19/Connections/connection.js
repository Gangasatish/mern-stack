import {connect} from 'mongoose';
const connection = async() => {
    
    try {
        await connect("mongodb://localhost:27017/character")
        console.log("MongoDB connection established")
        
    } catch (error) {
        console.log("MongoDB Connection Failed")
    }
}
export default connection;