import CartItem from './Cart';
import { useCart } from "react-use-cart";
import { useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const CartProduct = () => {
let navigate = useNavigate ();
 const {
 isEmpty,
 items,
 totalItems,
 cartTotal,
 emptyCart,
 clearCartMetadata
 } = useCart();
 const commander=()=>{

 navigate("/loginclient");
 }
 const more=()=>{
 navigate("/");
 }
 const clear=()=>{
 //Vider le cart
 emptyCart();
 clearCartMetadata();
 }
if (isEmpty || totalItems==0) return <h1>Cart Empty</h1>;
 return (

 <Grid container spacing={2} columns={15} marginTop={10}
marginLeft={10}>
 <Grid item xs={5}>
 {
 items.map(item => <CartItem key={item._id} item={item}/>)
 }
 </Grid>
 <Grid item xs={5}>

 <Button color="error" variant="outlined"
onClick={more}>Ajouter des articles</Button>
 <p>Total Articles</p>
<h4>{totalItems}</h4>
 <p>Total Payement</p>
<h3>{cartTotal} TND</h3>
 <hr />
<div>
 <Button color="warning" variant="outlined"
onClick={commander}>Commander</Button>
 <Button color="info" variant="outlined"
onClick={clear}>Annuler</Button>
 </div>
 </Grid>

 </Grid>
 );
}

export default CartProduct;