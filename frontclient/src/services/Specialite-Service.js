import Axios from "../Axios/Api";
const SPECIALITE_API="/specialites"
 const fetchSpecialites=async()=> {
 return await Axios.get(SPECIALITE_API);
 }

 export const SpecialiteService = {
 fetchSpecialites
 } 
