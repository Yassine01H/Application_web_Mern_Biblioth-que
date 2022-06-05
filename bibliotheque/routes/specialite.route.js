import express from 'express';
const router = express.Router();
import { getSpecialites, getSpecialiteByID, createSpecialite,
updateSpecialite, deleteSpecialite } from
'../controllers/specialite.controller.js';
/**
* @route GET /api/specialites
* @desc Get All specialites
* @access Public
*/
router.get('/', getSpecialites);
/**
* @route POST /api/specialites
* @desc Ajouter une specialite
* @access Public
*/
router.post('/', createSpecialite);
/**
* @route GET /api/specialites/:id
* @desc Renvoyer une specialite
* @access Public
*/
router.get('/:id', getSpecialiteByID);
/**
* @route PUT /api/specialites/:id
* @desc Modifier une specialite
* @access Public
*/
router.put('/:id', updateSpecialite);
/**
* @route DELETE /api/specialites/:id
* @desc Supprimer une specialite
* @access Public
*/
router.delete('/:id', deleteSpecialite);
export default router;
