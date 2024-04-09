import mongoose, { Schema, mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const todoModel = mongoose.model("todoModel", todoSchema, "listItemsData");

export default todoModel;