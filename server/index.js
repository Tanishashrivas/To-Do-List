import express from "express";
import Connection from "./database/db.js";   //extension is necessary
import todoModel from "./database/schema.js";
import cors from "cors";

const app = express();
const port = 3000;

Connection();

app.use(express.json()); // Parse JSON requests
app.use(cors());

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

    console.log("Received data:", text);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})