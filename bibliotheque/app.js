import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import editeurRouter from "./routes/editeur.route.js";
import specialiteRouter from "./routes/specialite.route.js";
import auteurRouter from "./routes/auteur.route.js"
import livreRouter from "./routes/livre.route.js"; 
import userRouter from "./routes/user.route.js"
//import userRouter from "./routes/user.route.js";
import clientRouter from "./routes/client.route.js";
import commandeRouter from "./routes/commande.route.js";
import lignecommandeRouter from "./routes/lignecommande.route.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.use('/api/livres', livreRouter); 
app.use('/api/auteurs', auteurRouter);
app.use('/api/editeurs', editeurRouter);
app.use('/api/specialites', specialiteRouter);
//app.use('/api/users', userRouter);
app.use('/api/users', clientRouter);
app.use('/api/commandes', commandeRouter);
app.use('/api/lignescommandes', lignecommandeRouter);

app.get("/",(req,res)=>{
res.send("Bibliothèque");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });