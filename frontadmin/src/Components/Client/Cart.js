import { useCart } from "react-use-cart"; 
import Plus from '@mui/icons-material/AddAlarm'; 
import Minus from '@mui/icons-material/RemoveCircle'; 
import Delete from '@mui/icons-material/Delete'; 
import Grid from '@mui/material/Grid'; 
export default function Cart({item}) { 
const { 
 updateItemQuantity, 
 removeItem, 
 } = useCart(); 
 
return ( 
 
 
<Grid item xs={5}>
 <img
 alt={item.titre}
 style={{margin: "0 auto", maxHeight: "100px"}} 
 src={"images/"+item.couverture} className="img-fluid dblock"/>
 <h5>{item.titre}</h5>
 <p>Prix: {item.price} </p>
 
 
 <p>Qté: {item.quantity}</p>
 
 <button 
 onClick={() => { 
 if(item.quantity < item.qtestock ) 
 updateItemQuantity(item._id, item.quantity + 1); 
 else
 alert("Quantité stock indisponible") 
 }}
 >
 <Plus color="success" />
 </button>
 {
 item.quantity > 1 && 
 <button 
onClick={() =>
 updateItemQuantity(item._id, item.quantity - 1) 
 }
 >
 <Minus color="warning" />
 </button>
 }
 {
 item.quantity === 1 && 
 <button 
 onClick={() => removeItem(item._id)}
 >
 <Delete color="error" />
 </button>
 }
 <hr /> 
 </Grid> 
 
 
 ); 
} 