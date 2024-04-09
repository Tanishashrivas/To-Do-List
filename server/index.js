import express from "express";
import cors from "cors";
import Connection from "./database/db.js";   //extension is necessary
import todoModel from "./database/schema.js";

const app = express();
// const router = express.Router();
const port = 3000;

Connection();

app.use(express.urlencoded({ extended:true }))
app.use(express.json()); // Parse JSON requests
app.use(cors()); // for cross origin platform's support

app.post("/todos", async(req,res)=> {
    const { text } = req.body; // Access the 'text' field from the request body

    try{
        const newTask = new todoModel({task: text});
        await newTask.save();
        console.log("Data saved successfully");
        res.status(201).json({message: "Data saved successfully"});
    }catch(error){
        console.error("Error saving the data", error);
        res.status(500).json({ message: "Error saving todo" });
    }

    // console.log("Received data:", text);
});

app.post("/delete", async(req, res) => {
    const {temp} = req.body;
    try{
        await todoModel.deleteOne({temp});
    }catch(error){
        console.error("Error deleting the data", error);
        res.status(500).json({ message: "Error deleting data" });
    }
})

app.get("/tasks", async(req, res) => {
    try{
        const taskList = await todoModel.find(); //fetching all the documents

        res.json(taskList);
    }catch(error){
        res.status(501).json({error: "Error fetching the data"});
        console.log("Error fetching the data", error);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})