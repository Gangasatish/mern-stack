import { Schema, model } from 'mongoose';
const userSchema = new Schema(
    {
        fname: String,
        lname: String,
        age: {
            type: Number,
            min: 18,
        },
        email: {
            type: String,
        }
    },
    {
        timestamps: true, // add a createdAt anf updatedAt
        strict: true, // prevents insertion of undefined fields
    }
)

const User = model("User", userSchema); //users
export default User;