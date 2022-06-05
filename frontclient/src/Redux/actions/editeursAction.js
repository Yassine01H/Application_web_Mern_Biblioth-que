import {GET_EDITEURS} from "../types"
import {EditeurService} from "../../services/Editeur-Service"; 
export const loadEditeurs=()=>{
    return (dispatch)=>{
    EditeurService.fetchEditeurs()
    .then(res=>{
    dispatch({type:GET_EDITEURS,
    payload:res.data})
   
    }).catch((error)=>console.log(error));
   
    }
   } 