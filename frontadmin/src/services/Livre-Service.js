import Axios from "../Axios/Api";
const LIVRE_API="/livres"
 const fetchLivres=async()=> {
 return await Axios.get(LIVRE_API);
 }
 const fetchLivreById=async(livreId)=> { 
    return await Axios.get(LIVRE_API + '/' + livreId);
 }
 const deleteLivre=async(livreId) =>{
 return await Axios.delete(LIVRE_API + '/' + livreId);
 }
 const addLivre=async(livre)=> {
 return await Axios.post(LIVRE_API, livre);

 }
 const editLivre=(livre) =>{
 return Axios.put(LIVRE_API + '/' + livre._id, livre);

 }

 export const LivreService = {
 fetchLivres,
 fetchLivreById,
 deleteLivre,
 addLivre,
 editLivre
 }