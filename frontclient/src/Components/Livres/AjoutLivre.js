import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {addlivre} from "../../Redux/actions/livresAction";
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
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const AjoutLivre=()=>{
 const [isbn, setIsbn] = useState("");
 const [titre, setTitre] = useState("");
 const [annedition, setAnnedition] = useState("");
 const [prix, setPrix] = useState("");
 const [qtestock, setQtestock] = useState("");
 const [specialite, setSpecialite] = useState("");
 const [maised, setMaised] = useState("");
 const [lesauteurs, setLesauteurs] = useState([]);
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate(); 
 useEffect(() => {
    dispatch(loadSpecialites());
    dispatch(loadEditeurs());
    dispatch(loadAuteurs());
    },[dispatch]);
    const specialites = useSelector((state) =>state.allspecialites.specialites);
    const editeurs = useSelector((state) =>state.allediteurs.editeurs);
    const auteurs = useSelector((state) =>state.allauteurs.auteurs);
   
    const handleSubmit = async(event)=> {
    event.preventDefault();
    const liv={
    isbn: isbn,
    titre:titre,
    annedition:annedition,
    prix:prix,
    qtestock:qtestock,
    couverture : files[0].file.name,
    specialite:specialite,
    maised:maised,
    auteurs:lesauteurs
    };
    dispatch(addlivre(liv));
    navigate("/");
    }
    return (
   
    <div className="container">
   
    <form style={{ marginLeft: 8}}>
    <div>
    <Button variant="contained"
   onClick={(event)=>handleSubmit(event)}>Ajout</Button>
    </div>
    <FormControl>
    <TextField
    variant="outlined"
   label="ISBN"
   value={isbn}
    onChange={e => setIsbn(e.target.value)}
    required />
    <TextField
    variant="outlined"
   label="Titre"
   value={titre}
    onChange={e => setTitre(e.target.value)}
    required />
 <TextField
 variant="outlined"
type="Number"
label="Année"
value={annedition}
 onChange={e => setAnnedition(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="Prix"
value={prix}
 onChange={e => setPrix(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="Quantité"
value={qtestock}
 onChange={e => setQtestock(e.target.value)}
 />
 <TextField
 variant="outlined"
 select
 label="Spécialité"
 value={specialite}
 helperText="Sélectionner une spécialité"
 onChange={e => setSpecialite(e.target.value)}
 >
 {
 specialites ?
 specialites.map((spec)=>
 <MenuItem key={spec._id}
value={spec._id}>{spec.nomspecialite}</MenuItem>
 )
 :null
 }
 </TextField>
 <TextField
 variant="outlined"
 select
 label="Editeur"
 value={maised}
 helperText="Sélectionner une maison d'édition"
 onChange={e => setMaised(e.target.value)}
 >
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
 variant="outlined"
 select
 label="Auteurs"
 SelectProps={{multiple: true}}
 value={lesauteurs}
 helperText="Sélectionner des auteurs"
 onChange={e => setLesauteurs(e.target.value)}
 >
 {
 auteurs ?
 auteurs.map((aut)=>
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
export default AjoutLivre 