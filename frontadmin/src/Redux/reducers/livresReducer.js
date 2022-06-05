import {GET_LIVRES,DELETE_LIVRE,ADD_LIVRE,GET_SINGLE_LIVRE,UPDATE_LIVRE} from
'../types'
const initialState={
 livres:[],
 livre:{}

};
const livresReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_LIVRES:
 return{
 ...state,
 livres:action.payload,

 };
 case ADD_LIVRE:
 return{
 ...state,
 livres : [...state.livres, action.payload],
 livre:action.payload
 };
 case DELETE_LIVRE:
 return{
 ...state,
 livres: state.livres.filter(livre=> livre._id !==
action.payload)
 };
 case UPDATE_LIVRE:
 return {
 ...state,
 livres:state.livres.map(livre => livre._id ===
action.payload._id ? (livre = action.payload) : livre)
 };
 case GET_SINGLE_LIVRE:
 return { ...state,
 livre:action.payload };
 default: return state
 }
}
export default livresReducers