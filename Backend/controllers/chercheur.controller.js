import express from 'express';
import mongoose from 'mongoose';
import unitéderecherche from '../models/unitéderecherche.js'
import utulisateur from '../models/user.js';
import projet from '../models/projet.js'
import chercheur from '../models/chercheur.js';

const router = express.Router();
export const chercherprojet = async (req, res) => {
    try {
      const cherch1 = await
    chercheur.find({},{projetRef:true}).populate("projetRef").exec();
      res.status(200).json(cherch1);
}
    catch (error) {
        res.status(404).json({ message: error.message });
}}
export const chercherchercheur = async (req, res) => {
    try {
      const cherch1 = await
    chercheur.find().populate("projetRef").populate("utlisateurRef").exec();
      res.status(200).json(cherch1);
}
    catch (error) {
        res.status(404).json({ message: error.message });
}
}
export const modifierutulisateur= async (req, res) => {
    const id  = req.params.id;
    const { name, email,numtlf,motdepasse,adresse} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`pas d'utulisateur avec un id: `);
    const utu = {  name:name,email:email,_id: id,numtlf:numtlf, motdepasse:motdepasse,adresse:adresse};
    await utulisateur.findByIdAndUpdate(id, utu);
    res.json(utu);
}
export const modifierunitéderecherche= async (req, res) => {
    const id = req.params.id;
    const { nom_du_laboratoire,Date_de_création,établissement_dacceuil,adresse,type}= req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`pas d'unité de recherche avec un id: `);
    const unité={ nom_du_laboratoire:nom_du_laboratoire,_id: id,Date_de_création:Date_de_création,établissement_dacceuil:établissement_dacceuil,adresse:adresse,type:type};
    await unitéderecherche.findByIdAndUpdate(id, unité);
    res.json(unité);
}
export default router;
