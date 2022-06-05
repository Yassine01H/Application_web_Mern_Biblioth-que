import mongoose from "mongoose"
var clientSchema = mongoose.Schema({
 nom:{
 type:String,
 required:"nom is required"
 } ,
 adress:{
 type:String
 } ,
 email:{
 type:String,
 required:"Email is required",
 unique:true
 } ,
 password:{
 type:String,
 required:"password is required"
 } ,
 role:{
 type:Number
 }
});
const Client=mongoose.model('Client',clientSchema)
 export default Client