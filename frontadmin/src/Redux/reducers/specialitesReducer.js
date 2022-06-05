import {GET_SPECIALITES} from '../types'
const initialState={
 specialites:[]
};
const specialitesReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_SPECIALITES:
 return{
 ...state,
 specialites:action.payload,

 };
 default: return state
 }
}
export default specialitesReducers