import express from 'express';
const router = express.Router();
import { getEditeurs, getEditeurByID, createEditeur, updateEditeur,
deleteEditeur } from '../controllers/editeur.controller.js';
/**
* @route GET /api/editeurs
* @desc Get All editeurs
* @access Public
*/
router.get('/', getEditeurs);
/**
* @route POST /api/editeurs
* @desc Ajouter un editeur
* @access Public
*/
router.post('/', createEditeur);
/**
* @route GET /api/editeurs/:id
* @desc Renvoyer un editeur
* @access Public
*/
router.get('/:id', getEditeurByID);
/**
 * @route PUT /api/editeurs/:id
* @desc Modifier un editeur
* @access Public
*/
router.put('/:id', updateEditeur);
/**
* @route DELETE /api/editeurs/:id
* @desc Supprimer un editeur
* @access Public
*/
router.delete('/:id', deleteEditeur);
export default router;
