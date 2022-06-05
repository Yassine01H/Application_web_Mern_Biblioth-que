import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Axios from '../../Axios/Api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function Registration() {
 const navigate = useNavigate();
 const[nom,setNom]=useState('');
 const[adress,setAdress]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

 const handleSubmit=async(event)=>{
 event.preventDefault();
 const objetuser = {
 nom: nom,
 adress: adress,
 email: email,
 password:password,
 role:0
 };
 await Axios.post("/users/", objetuser).then((res)=>{
 navigate("/loginclient");
 }).catch(error => {
 console.log(error)
 });
 }
 return (
 <>
 <div>
 <Box sx={{ marginTop : 10, marginLeft : 40, border:"solid blue",
width:300, padding:10}}>
 <form style={{ marginLeft: 8}}>
 <div>
 <TextField
 variant="outlined"
label="Nom"
onChange={(event)=>setNom(event.target.value)}
 required />
 </div>
 <div>
 <TextField
 variant="outlined"
label="Adresse"
onChange={(event)=>setAdress(event.target.value)}
 required />
 </div>
 <div>
 <TextField
 variant="outlined"
label="Email"
onChange={(event)=>setEmail(event.target.value)}
 required />
 </div>
 <div>
 <TextField
 variant="outlined"
type="password"
label="Password"
onChange={(event)=>setPassword(event.target.value)
}
 required />
 </div>
 <div>
 <Button color="error"
variant="contained" onClick={(event)=>handleSubmit(event)}>Valider</Button>
 </div>
 </form>
 </Box>
 </div>
 </>
 );
}
export default Registration; 
