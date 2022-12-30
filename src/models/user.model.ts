import mongoose,{Document} from "mongoose";

export interface UserDocument extends Document{
    name:string,
    mobile:number
    count:number,
    Total:number
}

interface User{
    name:string,
    mobile:number,
    count:number,
    Total:number
}

const userSchema= new mongoose.Schema<User>({
  name: {type:String,required:true},
  mobile:{type: Number,required:true},
  count:{type:Number,default:0},
  Total:{type: Number,default:0}
})

const UserModel= mongoose.model<User>('user',userSchema)
export{
    UserModel
}