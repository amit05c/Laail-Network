import express,{Request,Response} from "express"
import { router } from "./routers/router"
import { connection } from "./config/db"
import { contractRouter } from "./routers/contractRouter"

const app= express()

app.use(express.json())
app.get("/",(req:Request,res:Response)=>{
    res.send("done")
})
app.use("/user",router)
app.use("/contract",contractRouter)

app.listen(8080,async()=>{
    try{
       await connection
       console.log("connected")
    }
    catch(err){
           console.log(err)
    }
})


