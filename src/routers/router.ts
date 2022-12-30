import express,{Request,Response} from "express"
import { getAllUsers, userCreate } from "../constrollers/user"
const router= express.Router()
router.post("/",userCreate)
router.get("/",getAllUsers)


export {
    router
}