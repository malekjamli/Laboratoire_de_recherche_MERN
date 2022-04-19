import express from 'express';
import {auth} from "../middlewares/auth.js"
import { chercherprojet, chercherchercheur,modifierutulisateur, modifierunitéderecherche } from '../controllers/chercheur.controller.js';

const router = express.Router();
router.get('/projets',chercherprojet);
router.get('/ch',chercherchercheur);
router.put('/user/:id', modifierutulisateur);
router.put('/ur/:id', modifierunitéderecherche);

export default router;