import mongoose from "mongoose"
var auteurSchema = mongoose.Schema({
nomauteur: String,
email: String,
numtel: String
});
const Auteur = mongoose.model('Auteur', auteurSchema);
export default Auteur