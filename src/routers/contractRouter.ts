import express,{Request,Response} from "express"
import { contractCreate, getContract } from "../constrollers/contract"
const contractRouter= express.Router()
contractRouter.post("/",contractCreate)
contractRouter.get("/",getContract)



export {
    contractRouter
}