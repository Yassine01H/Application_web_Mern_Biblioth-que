import React, { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import {loadLivres} from "../../Redux/actions/livresAction"
import AfficheCards from "./AfficheCards"
const ListCards=()=>{ 
 
 const dispatch = useDispatch(); 
 
 useEffect(() => { 
 dispatch(loadLivres()); 
 }); 
 
 
 return( 
 
 <div><AfficheCards/></div>
 ) 
} 
export default ListCards 