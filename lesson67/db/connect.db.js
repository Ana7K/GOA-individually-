import mongoose from "mongoose";

export  const connectDB = async()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://ana:lomi123@cluster0.rfajufy.mongodb.net/lomebi?retryWrites=true&w=majority&appName=Cluster0")
        console.log(conn.connection.host, "successfully connected")
    } catch (error) {
        console.log("mongo db is  not connected", error)
    }
}