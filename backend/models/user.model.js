import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        profileImageUrl: {
            type: String,
            default: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",},

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        }
    },
    { timestamps: true }
)

const User = mongoose.model("User", userSchema)
export default User