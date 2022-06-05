import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import {loadSinglelivre,updatelivre} from "../../Redux/actions/livresAction";
import {loadSpecialites} from "../../Redux/actions/specialitesAction";
import {loadEditeurs} from "../../Redux/actions/editeursAction";
import {loadAuteurs} from "../../Redux/actions/auteursAction";
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const EditLivre=()=>{
 const [state, setState] = useState({
 isbn: "", titre: "", annedition:"",
 prix:"",qtestock:"",specialite:"",
 maised:"",auteurs:[]
 });

 const [aut, setAut] = useState([])
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const params = useParams();
 const _id=params._id;
 useEffect(() => {
 dispatch(loadSinglelivre(_id));
 dispatch(loadSpecialites());
 dispatch(loadEditeurs());
 dispatch(loadAuteurs());
 setFiles("");
 },[_id,dispatch]);

 const livre = useSelector((state) => state.alllivres.livre);
 const specialites = useSelector((state) =>state.allspecialites.specialites);
 const editeurs = useSelector((state) =>state.allediteurs.editeurs);
 const listeauteurs = useSelector((state) =>state.allauteurs.auteurs);

 useEffect(()=>{
 setState(livre);
 setFiles(livre.couverture)
 },[livre]);
 const handleSubmit = async(event)=> {
 event.preventDefault();
 console.log(aut)
 const liv={
 _id:_id,
 isbn: state.isbn,
 titre:state.titre,
 annedition:state.annedition,
 prix:state.prix,
 qtestock:state.qtestock,
 couverture : files[0].file.name,
 specialite:state.specialite,
 maised:state.maised,
 auteurs:aut.length>0?aut:state.auteurs
 };
 dispatch(updatelivre(liv));
 navigate("/livres");
 }
 const handelInputChange=(e)=>{
 const {name,value}=e.target;
 setState({...state,[name]:value});
 }
 const labelmaised=()=>{
 if( state.maised){
 if( state.maised.maisonedit) return "Editeur :"+state.maised.maisonedit
 }
 else return null
 }
 const labelspecialite=()=>{
 if( state.specialite){
 if( state.specialite.nomspecialite) return "Spécialité :"+state.specialite.nomspecialite
 }
 else return null
 }
 const labelauteur=()=>{
 if(state.auteurs) {
 let ch=""
 state.auteurs.map((aut)=>{
 if(aut.nomauteur)
 ch = ch+aut.nomauteur
 })
 return ch
 }
 else return null
 }
 const handleAuteurs=(event)=>{
 setState({...state,"auteurs": []});

 setAut(event.target.value);

 }
 return (

 <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button color="secondary" variant="contained"
onClick={(event)=>handleSubmit(event)}>Modifier</Button>
 </div>
 <FormControl>
 <TextField name="isbn"
 variant="outlined"
label="ISBN"
value={state.isbn}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="titre"
 variant="outlined"
label="Titre"
value={state.titre}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="annedition"
 variant="outlined"
type="Number"
label="Année"
value={state.annedition}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="prix"
 variant="outlined"
type="Number"
label="Prix"
value={state.prix}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="qtestock"
 variant="outlined"
type="Number"
label="Quantité"
value={state.qtestock}
 onChange={handelInputChange}
 style={{ margin: 10}}/>

 <TextField name="specialite"
 variant="outlined"
 select
 label={labelspecialite()}
 value={state.specialite}
 onChange={handelInputChange}
 style={{ margin: 10}}>

 {
 specialites ?
 specialites.map((spec)=>
 <MenuItem key={spec._id}
value={spec._id}>{spec.nomspecialite}</MenuItem>
 )
 :null
 }
 </TextField>
 <TextField name="maised"
 variant="outlined"
 select
 label={labelmaised()}
 value={state.maised}
 onChange={handelInputChange}
 style={{ margin: 10}}>

 {
 editeurs ?
 editeurs.map((edi)=>
 <MenuItem key={edi._id}
value={edi._id}>{edi.maisonedit}</MenuItem>
 )
 :null
 }
 </TextField>
 <TextField
 name="auteurs"
 variant="outlined"
 select
 label={labelauteur()}
 SelectProps={{multiple: true}}
 value={aut?aut:state.auteurs}
 helperText="Sélectionner des auteurs"
 onChange={(event)=>handleAuteurs(event)}
 >
 {
 listeauteurs ?
 listeauteurs.map((aut)=>
 <MenuItem key={aut._id}
value={aut._id}>{aut.nomauteur}</MenuItem>
 )
 :null
 }
 </TextField>
 </FormControl>
 </form>

 <h4>Télécharger Image</h4>
 <FormControl>
 <div style={{width:300, height:50}}>
 <FilePond
 files={files}
 allowMultiple={false}
 onupdatefiles={setFiles}
 labelIdle='<span class="filepond--label-action">Browse
One</span>'
 />
 </div>
 </FormControl>
 </div>
 );}
export default EditLivre