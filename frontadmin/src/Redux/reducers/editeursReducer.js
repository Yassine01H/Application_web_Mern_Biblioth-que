import {GET_EDITEURS} from '../types'
const initialState={
 editeurs:[]
};
const editeursReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_EDITEURS:
 return{
 ...state,
 editeurs:action.payload,

 };
 default: return state
 }
}
export default editeursReducers