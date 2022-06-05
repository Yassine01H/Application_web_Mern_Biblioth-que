import {GET_AUTEURS} from '../types'
const initialState={
 auteurs:[]
};
const auteursReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_AUTEURS:
 return{
 ...state,
 auteurs:action.payload,

 };
 default: return state
 }
}
export default auteursReducers