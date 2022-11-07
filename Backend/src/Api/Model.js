import mongoose from "mongoose"
const {Schema,model} = mongoose
const apiModel = new Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    adults:{type:String},
    description:{type:String},
    createdAt: {
        type: Date,
        default: new Date(),
      },
},{timestamps:true})
export default model("Api",apiModel)