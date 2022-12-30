import { DocumentDefinition,FilterQuery,UpdateQuery,QueryOptions } from "mongoose";
import { UserModel,UserDocument } from "../models/user.model";
import { ContractModel,ContractDocument } from "../models/contract.model";

export function createUser(input:DocumentDefinition<UserDocument>){
   return UserModel.create(input)
}

export function findAllusers(query:FilterQuery<UserDocument>,options:QueryOptions={lean:true}){
           return UserModel.find(query,{},options)
}

export function findAndUpdate(query:FilterQuery<UserDocument>,update:UpdateQuery<UserDocument>,options:QueryOptions){
    return UserModel.findOneAndUpdate(query,update,options)
}




export function createContract(input:DocumentDefinition<ContractDocument>){
         return ContractModel.create(input)
}


export function findAllContract(query:FilterQuery<ContractDocument>,options:QueryOptions={lean:true}){
    return ContractModel.find(query,{},options)
}

