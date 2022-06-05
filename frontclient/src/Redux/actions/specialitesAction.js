import {GET_SPECIALITES} from "../types"
import {SpecialiteService} from "../../services/Specialite-Service";
export const loadSpecialites=()=>{
 return (dispatch)=>{
 SpecialiteService.fetchSpecialites()
 .then(res=>{
 dispatch({type:GET_SPECIALITES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}