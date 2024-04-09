import express from "express";
import cors from "cors";
import Connection from "./database/db.js";   //extension is necessary
import todoModel from "./database/schema.js";

const app = express();
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

app.post("/delete", async(req,res) => {
    try{
    const {temp} = req.body;

    await todoModel.deleteOne({task:temp});
    res.json("deleted successfully");
    }catch(error){
        res.json({error: error});
    }
})

app.get("/todos", async(req,res) => {
    try{
    const taskList = await todoModel.find();
    res.json(taskList);
    }catch(error){
        res.json({error: error});
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})