import express,{Request,Response} from "express"
import { createUser,findAllusers } from "../services/user.service"

const userCreate= async(req:Request,res:Response)=>{
    try{

        let {name,mobile,count,Total}=req.body
        await createUser({name,mobile,count,Total})
       res.status(200).send("New user created")
    }
    catch(err){
           res.status(400).send({Error: "Something went wrong"})
    }

}

const getAllUsers=async(req:Request,res:Response)=>{

    try{
        let allUsers= await findAllusers({})
        res.status(200).send(allUsers)

    }
    catch(err){
        res.status(400).send({Error:"Something Error"})
    }

}
export{
    userCreate,
    getAllUsers
}