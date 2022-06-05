import express from 'express';
const router = express.Router();
import { getLivres, getLivreByID, createLivre, updateLivre, deleteLivre } from
    '../controllers/livre.controller.js';
import {auth} from "../middleware/auth.js"
/**
 * @route GET /api/livres
 * @desc Get All livres
 * @access Public
 */
router.get('/', getLivres);
/**
 * @route POST /api/livres
 * @desc Ajouter un livre
 * @access Public
 */
router.post('/', createLivre);
/**
 * @route GET /api/livres/:id
 * @desc Renvoyer un livre
 * @access Public
 */
router.get('/:id',auth,getLivreByID);
/**
 * @route PUT /api/livres/:id
 * @desc Modifier un livre
 * @access Public
 */
router.put('/:id', updateLivre);
/**
 * @route DELETE /api/livres/:id
 * @desc Supprimer un livre
 * @access Public
 */
router.delete('/:id', deleteLivre);
export default router; 

