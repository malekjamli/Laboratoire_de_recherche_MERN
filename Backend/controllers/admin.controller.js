import express from 'express';
import mongoose from 'mongoose';
import admin from '../models/admin.js';
import chercheur from '../models/chercheur.js';
import projet from '../models/projet.js'
import unitéderecherche from '../models/unitéderecherche.js'
import utulisateur from '../models/user.js';
const router = express.Router();

export const getAdmin = async (req, res) => {
    try {
      const admin1 = await
    admin.find();
      res.status(200).json(admin1);
}
    catch (error) {
        res.status(404).json({ message: error.message} );} }

        


export const consulterchercheur = async (req, res) => {
    try {
      const adm = await
      chercheur.find();
      res.status(200).json(adm);
}
    catch (error) {
        res.status(404).json({ message: error.message });
}}


export const consultercheflaboratoire = async (req, res) => {
    try {
        const adm = await
        chercheur.find().populate("chercheurRef").exec();
        res.status(200).json(scat);
  }
      catch (error) {
          res.status(404).json({ message: error.message });
  }
  }
export const consulterutulisateur = async (req, res) => {
    try {
      const adm = await
      utulisateur.find();
      res.status(200).json(adm);
}
    catch (error) {
        res.status(404).json({ message: error.message });
}
}
export const consulterprojet = async (req, res) => {
    try {
      const adm = await
      projet.find();
      res.status(200).json(adm);
}
    catch (error) {
        res.status(404).json({ message: error.message });
}
}
export const ajouterchercheur = async (req, res) => {
    const { sexe, grade,last_diplome,universite,etablissement,motclé,birthday_place,Fonctionnalités,utlisateurRef,projetRef} = req.body;
    const newchercheur = new chercheur({ sexe:sexe, grade:grade,last_diplome:last_diplome,universite:universite,etablissement:etablissement,motclé:motclé,birthday_place:birthday_place,Fonctionnalités:Fonctionnalités,utlisateurRef:utlisateurRef, projetRef:projetRef})
    try {await newchercheur.save();
        res.status(201).json(newchercheur );
}
    catch (error) {
        res.status(409).json({ message: error.message });
}
}
export const ajouterunitéderecherche = async (req, res) => {
    const { nom_du_laboratoire,Date_de_création,établissement_dacceuil,adresse,type,chercheurRef} = req.body;
    const newunitéderecherche = new unitéderecherche({ nom_du_laboratoire:nom_du_laboratoire, Date_de_création:Date_de_création,établissement_dacceuil:établissement_dacceuil,adresse:adresse,type:type,chercheurRef:chercheurRef})
    try {await newunitéderecherche.save();
        res.status(201).json(newunitéderecherche );
}
    catch (error) {
        res.status(409).json({ message: error.message });
}
}
export const ajouterprojet = async (req, res) => {
    const { titre,specific_challenge,scope,Expected_Impact,Typeofaction,url,motcle,date_début,date_fin} = req.body;
    const newprojet = new projet({ titre:titre, specific_challenge:specific_challenge,scope:scope,Expected_Impact:Expected_Impact,Typeofaction:Typeofaction,url:url,motcle:motcle,date_début:date_début,date_fin:date_fin})
    try {await newprojet.save();
        res.status(201).json(newprojet );
}
    catch (error) {
        res.status(409).json({ message: error.message });
}
}
export const ajoutercheflaboratoire = async (req, res) => {
    const { sexe, grade,last_diplome,universite,etablissement,motclé,birthday_place,Fonctionnalités,utlisateurRef,projetRef} = req.body;
    const newchercheur = new chercheur({ sexe:sexe, grade:grade,last_diplome:last_diplome,universite:universite,etablissement:etablissement,motclé:motclé,birthday_place:birthday_place,Fonctionnalités:Fonctionnalités,utlisateurRef:utlisateurRef, projetRef:projetRef})
    try {await newchercheur.save();
        res.status(201).json(newchercheur );
}
    catch (error) {
        res.status(409).json({ message: error.message });
}
}
export const modifierchercheur= async (req, res) => {
    const { id } = req.params;
    const { sexe, grade,last_diplome,universite,etablissement,motclé,birthday_place,Fonctionnalités,utlisateurRef,projetRef} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`pas de chercheur avec un id: ${id}`);
    const cherch = { sexe:sexe,grade:grade,_id: id,last_diplome:last_diplome, universite:universite,etablissement:etablissement,motclé:motclé,birthday_place:birthday_place,Fonctionnalités:Fonctionnalités,utlisateurRef:utlisateurRef,projetRef:projetRef};
    await chercheur.findByIdAndUpdate(id, cherch);
    res.json(cherch);
}
export const modifiercheflaboratoire= async (req, res) => {
    const { id } = req.params;
    const { sexe, grade,last_diplome,universite,etablissement,motclé,birthday_place,Fonctionnalités,utlisateurRef,projetRef} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`pas de chef laboratoire avec un id: ${id}`);
    const chef = { sexe:sexe,grade:grade,_id: id,last_diplome:last_diplome, universite:universite,etablissement:etablissement,motclé:motclé,birthday_place:birthday_place,Fonctionnalités:Fonctionnalités,utlisateurRef:utlisateurRef,projetRef:projetRef};
    await chercheur.findByIdAndUpdate(id, chef);
    res.json(chef);
}
export const modifierutulisateur= async (req, res) => {
    const { id } = req.params;
    const { name, email,numtlf,motdepasse,adresse} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`pas d'utulisateur avec un id: ${id}`);
    const utu = {  name:name,email:email,_id: id,numtlf:numtlf, motdepasse:motdepasse,adresse:adresse};
    await utulisateur.findByIdAndUpdate(id, utu);
    res.json(utu);
}
export const modifierprojet= async (req, res) => {
    const { id } = req.params;
    const { titre,specific_challenge,scope,Expected_Impact,Typeofaction,url,motcle,date_début,date_fin}= req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`pas d'utulisateur avec un id: ${id}`);
    const proj={ titre:titre, specific_challenge:specific_challenge,scope:scope,Expected_Impact:Expected_Impact,Typeofaction:Typeofaction,url:url,motcle:motcle,date_début:date_début,date_fin:date_fin};
    await projet.findByIdAndUpdate(id, proj);
    res.json(proj);
}
export const supprimerprojet = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
       return res.status(404).send(`pas de projet avec l'ID: ${id}`);
    await projet.findByIdAndDelete(id);
    res.json({ message: "projet deleted successfully." });
}
export const supprimercheflaboratoire = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
       return res.status(404).send(`pas de chef laboratoire avec l'ID: ${id}`);
    await projet.findByIdAndDelete(id);
    res.json({ message: "chef laboratoire deleted successfully." });
}
export const supprimerunitéderecherche = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
       return res.status(404).send(`pas de unité de rechercheavec l'ID: ${id}`);
    await projet.findByIdAndDelete(id);
    res.json({ message: "unité de recherche deleted successfully." });
}
export const supprimerchercheur = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
       return res.status(404).send(`pas de chercheur avec l'ID: ${id}`);
    await chercheur.findByIdAndDelete(id);
    res.json({ message: "chercheur deleted successfully." });
}
export default router;