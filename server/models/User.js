import {Schema, Model, model} from "mongoose"

const userSchema = new Schema({
    fullName:{
        type: String,
        required:true
    },
   
    email:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    dob:{
        type:String,
        required:true
    }

})

const User = model("User", userSchema)
export default User