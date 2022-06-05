import mongoose from "mongoose"
var livreSchema = mongoose.Schema({
 isbn: String,
 titre: {type: String, required: true},
 annedition: Number,
 prix: Number,
 qtestock: Number,
 couverture: String,
 specialite: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Specialite'
 },
 maised: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Editeur'
 },
 auteurs: [{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Auteur'
 }]
})
const Livre = mongoose.model('Livre', livreSchema);
export default Livre 
