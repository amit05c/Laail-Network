import mongoose,{Document} from "mongoose";

export interface ContractDocument extends Document{
    LenderId:mongoose.Schema.Types.ObjectId,
    BorrowerId:mongoose.Schema.Types.ObjectId,
    Principle:number,
    Interest:number,
    LoanStartDate:string,
    LoanDueDate:string,
    IsRepaid:boolean
}

interface Contract{
    LenderId:mongoose.Schema.Types.ObjectId,
    BorrowerId:mongoose.Schema.Types.ObjectId,
    Principle:number,
    Interest:number,
    LoanStartDate:string,
    LoanDueDate:string,
    IsRepaid:boolean
}

const constractSchema= new mongoose.Schema<Contract>({
    LenderId:{ type: mongoose.Schema.Types.ObjectId, ref: "user"},
    BorrowerId:{ type: mongoose.Schema.Types.ObjectId, ref: "user"},
    Principle:{type: Number, required:true},
    Interest:{type: Number, required:true},
    LoanStartDate:{type: String, required:true},
    LoanDueDate:{type: String, required:true},
    IsRepaid:{type: Boolean, required:true},
    


    
})

const ContractModel= mongoose.model<Contract>('contract',constractSchema)
export{
    ContractModel
}