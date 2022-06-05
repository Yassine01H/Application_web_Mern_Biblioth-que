import mongoose from 'mongoose';
import Auteur from '../models/Auteur.model.js';
export const getAuteurs = async (req, res) => {
try {
const cat = await Auteur.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getAuteurByID = async (req, res) => {
try {
const cat = await Auteur.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createAuteur = async (req, res) => {
const { nomauteur, email, numtel} = req.body;
const newAuteur = new Auteur({ nomauteur:nomauteur, email:email,
numtel:numtel })
try {
await newAuteur.save();
res.status(201).json(newAuteur );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateAuteur= async (req, res) => {
const { id } = req.params;
const { nomauteur, email, numtel} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de auteur avec un id: ${id}`);
const aut1 = { nomauteur:nomauteur, email:email, numtel:numtel, _id: id };
await Auteur.findByIdAndUpdate(id, aut1);
res.json(aut1);
}
export const deleteAuteur = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de auteur avec l'ID: ${id}`);
    await Auteur.findByIdAndDelete(id);
    res.json({ message: "auteur supprimé avec succès." });
}