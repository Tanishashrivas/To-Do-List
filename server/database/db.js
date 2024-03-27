import mongoose from "mongoose";

const Connection = () => {
    const mongodbUrl = "mongodb://127.0.0.1:27017/todoData"; //database name is todoData

    mongoose.connect( mongodbUrl);

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    })
    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    })
    mongoose.connection.on('error', () => {
        console.log("Error while connecting with the database", error.message);
    })

}

export default Connection;