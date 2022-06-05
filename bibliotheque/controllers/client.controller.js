import Client from '../models/Client.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const createClient = async (req, res) => {
 const{nom,adress,email,password,role}=req.body;
 const salt=await bcrypt.genSalt(10);
 const hash=await bcrypt.hash(password,salt);
 const newClient=new Client({
 nom:nom,
 adress:adress,
 email:email,
 password:hash,
 role:role
 });
 try {
 await newClient.save();

 res.status(201).json(newClient ); 
} catch (error) {
    res.status(409).json({ message: error.message });
    }
    }
   const generateAccessToken=(client) =>{
    return jwt.sign({client}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:
   '60s' });
    }
   export const getclientBYEmail = async (req, res) => {
    try {
    const{email,password}=req.body;
    const client = await Client.findOne({email});
    if(client==""){ res.status(401).send('utilisateur non existant');
    return} ;
    const isMatch=await bcrypt.compare(password,client.password);
    if(!isMatch) res.status(400).json({msg:'mot de passe incorrect'})
    if(client.role=="0") throw Error('Accès authorisé sauf pour admin');
    const accessToken = generateAccessToken(client);
    const refreshToken = generateRefreshToken(client);
   
    res.status(200).json({
    accessToken,
    refreshToken
    })
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
   }
   // Refresh
   function generateRefreshToken(client) {
    return jwt.sign({client}, process.env.REFRESH_TOKEN_SECRET, { expiresIn:
   '1y' });
   }
   //Refresh
   export const RefreshToken = async (req, res) => {
    try {
    const{email,password}=req.body;
    const client = await Client.findOne({email});
    if(client==""){ res.status(404).send('utilisateur non existant');
    return} ;
    const isMatch=await bcrypt.compare(password,client.password);
    if(!isMatch) res.status(400).json({msg:'mot de passe incorrect'})
    const refreshedToken = generateAccessToken(client);
    res.status(200).json({
    accessToken: refreshedToken,
    })
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
   };
   export const getclientBYEmailClient = async (req, res) => {
    try {
    const{email,password}=req.body;
    const client = await Client.findOne({email});
    if(client==""){ res.status(401).send('utilisateur non existant');
    return} ;
    const isMatch=await bcrypt.compare(password,client.password);
    if(!isMatch) res.status(400).json({msg:'mot de passe incorrect'})
    const accessToken = generateAccessToken(client);
    const refreshToken = generateRefreshToken(client);
    const _id=client._id
    res.status(200).json({
    accessToken,
    refreshToken,
    _id
    })
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
   }