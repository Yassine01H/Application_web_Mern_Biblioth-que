import mongoose from "mongoose"
var commandeSchema = mongoose.Schema({
 total: Number,
 refclient: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Client'
 }
 },
 {
 timestamps: true
 });
const Commande = mongoose.model('Commande', commandeSchema);
export default Commande 