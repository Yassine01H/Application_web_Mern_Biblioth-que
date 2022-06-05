import mongoose from 'mongoose';
import Editeur from '../models/Editeur.model.js';
export const getEditeurs = async (req, res) => {
try {
        const cat = await Editeur.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getEditeurByID = async (req, res) => {
try {
const edi = await Editeur.findById(req.params.id);
res.status(200).json(edi);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createEditeur = async (req, res) => {
const { maisonedit, siteweb, email } = req.body;
const newEditeur = new Editeur({ maisonedit:maisonedit, siteweb:siteweb,
email:email })
try {
await newEditeur.save();
res.status(201).json(newEditeur );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateEditeur= async (req, res) => {
const { id } = req.params;
const { maisonedit, siteweb, email } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de éditeur avec un id: ${id}`);
const edi1 = { maisonedit:maisonedit, siteweb:siteweb, email:email, _id:
id };
await Editeur.findByIdAndUpdate(id, edi1);
res.json(edi1);
}
export const deleteEditeur = async (req, res) => {
    const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de éditeur avec l'ID: ${id}`);
await Editeur.findByIdAndDelete(id);
res.json({ message: "éditeur supprimé avec succès." });
}
