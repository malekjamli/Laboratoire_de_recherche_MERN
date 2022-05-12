import express from 'express';
import { ajouterchercheur, ajouterunitéderecherche, ajoutercheflaboratoire, ajouterprojet, modifierchercheur,modifiercheflaboratoire,modifierutulisateur,modifierprojet,supprimerunitéderecherche,supprimerchercheur ,supprimercheflaboratoire,supprimerprojet,consulterchercheur,consultercheflaboratoire,consulterutulisateur,consulterprojet,getAdmin} from '../controllers/admin.controller.js';
const router = express.Router();
router.post('/ajout/cher', ajouterchercheur);//cv
router.post('/ajout/unite', ajouterunitéderecherche);//cv
//router.post('/ajout/chef', ajoutercheflaboratoire);
router.post('/ajout/projet', ajouterprojet);//cv
router.put('/mod/cher/:id', modifierchercheur);//cv
//router.put('/mod/lab/:id', modifiercheflaboratoire);
router.put('/mod/user/:id', modifierutulisateur);//cv
router.put('/mod/projet/:id', modifierprojet);//cv
router.delete('/sup/unite/:id', supprimerunitéderecherche);//cv
router.delete('/sup/cher/:id', supprimerchercheur);
//router.delete('/sup/chef/:id', supprimercheflaboratoire);
router.delete('/sup/pojet/:id', supprimerprojet);
router.get('/', getAdmin);
router.get('/cons/cher/', consulterchercheur);
//router.get('/cons/chef/', consultercheflaboratoire);
router.get('/cons/user/', consulterutulisateur);
router.get('/cons/projet/', consulterprojet);
export default router;