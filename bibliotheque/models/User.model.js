import mongoose from "mongoose"
var userSchema = mongoose.Schema({
 nom:{
 type:String,
 required:"nom is required"
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

});
const User=mongoose.model('User',userSchema)
 export default User 

import jwt from "jsonwebtoken"
export const createUser = async (req, res) => {
 const newUser = new User(req.body)
 try {
 await newUser.save();

 res.status(201).json(newUser );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
 const generateAccessToken=(user) =>{
 return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h'});
 }
export const getuserBYEmail = async (req, res) => {
 try {
 const{email,password}=req.body;
 const user = await User.find({email,password});
 if(user==""){ res.status(401).send('utilisateur non existant');
 return} ;
 const accessToken = generateAccessToken(user);
 res.status(200).json({
 accessToken
 })
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
} 