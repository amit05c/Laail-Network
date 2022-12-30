import mongoose from "mongoose";
// we also use dotenv file to store the mongo url and username and password like all secret things
const connection=mongoose.connect("mongodb+srv://amit:amit@cluster0.zvhwrny.mongodb.net/?retryWrites=true&w=majority")

export{
    connection
}