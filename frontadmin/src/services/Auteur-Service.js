import Axios from "../Axios/Api";
const AUTEUR_API="/auteurs"
 const fetchAuteurs=async()=> {
 return await Axios.get(AUTEUR_API);
 }

 export const AuteurService = {
 fetchAuteurs
 } 
