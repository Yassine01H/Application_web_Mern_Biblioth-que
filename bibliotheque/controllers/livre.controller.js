import mongoose from 'mongoose';
import Livre from '../models/Livre.model.js';
export const getLivres = async (req, res) => {
    try { 
     const cat = await Livre.find().populate('auteurs')
 .populate('specialite')
 .populate('maised');
;

 res.status(200).json(cat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getLivreByID = async (req, res) => {
 try {
 const liv = await Livre.findById(req.params.id).populate('auteurs')
 .populate('specialite'
)
 .populate('maised');
 res.status(200).json(liv);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createLivre = async (req, res) => {
 const {
isbn,titre,annedition,prix,qtestock,couverture,specialite,maised,auteurs } =
req.body;

 const newLivre = new Livre({
isbn:isbn,titre:titre,annedition:annedition,prix:prix,qtestock:qtestock,couverture:couverture,specialite:specialite,maised:maised,auteurs:auteurs })
 try {
 await newLivre.save();
 res.status(201).json(newLivre );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateLivre= async (req, res) => {
 const { id } = req.params;
 const {
isbn,titre,annedition,prix,qtestock,couverture,specialite,maised,auteurs } =
        req.body; 
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de livre avec un id: ${id}`);
 const liv1 = {
isbn:isbn,titre:titre,annedition:annedition,prix:prix,qtestock:qtestock,couver,
ture:couverture,specialite:specialite,maised:maised,auteurs:auteurs, _id: id
};
 await Livre.findByIdAndUpdate(id, liv1);
 res.json(liv1);
}
export const deleteLivre = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de livre avec l'ID: ${id}`);
 await Livre.findByIdAndDelete(id);
 res.json({ message: "livre supprimé avec succès." });
}