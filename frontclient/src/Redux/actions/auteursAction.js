import {GET_AUTEURS} from "../types"
import {AuteurService} from "../../services/Auteur-Service";
export const loadAuteurs=()=>{
 return (dispatch)=>{
 AuteurService.fetchAuteurs()
 .then(res=>{
 dispatch({type:GET_AUTEURS,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 
