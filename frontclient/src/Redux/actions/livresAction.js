import {GET_LIVRES,DELETE_LIVRE,ADD_LIVRE,GET_SINGLE_LIVRE,UPDATE_LIVRE} from
"../types"
import {LivreService} from "../../services/Livre-Service";
export const loadLivres=()=>{
 return (dispatch)=>{
 LivreService.fetchLivres()
 .then(res=>{
 dispatch({type:GET_LIVRES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const loadSinglelivre=(_id)=>{
 return (dispatch)=>{
 LivreService.fetchLivreById(_id)
 .then((res)=>{
 dispatch({type:GET_SINGLE_LIVRE,
 payload:res.data});
 }).catch((error)=>console.log(error));

 }
}
export const addlivre=(livre)=>{
 return (dispatch)=>{
 LivreService.addLivre(livre)
 .then((res)=>{
 dispatch({type:ADD_LIVRE,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const deletelivre=(_id)=>{
 return dispatch=>{
 LivreService.deleteLivre(_id)
 .then((res)=>{
 dispatch({type:DELETE_LIVRE,
 payload:_id})
 }).catch((error)=>console.log(error));

 }
}
export const updatelivre=(livre)=>{
 return dispatch=>{
 LivreService.editLivre(livre)
 .then((res)=>{
 dispatch({type:UPDATE_LIVRE,
 payload:res.data})
 }).catch((error)=>console.log(error));

 }
}
