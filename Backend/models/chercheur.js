import mongoose from "mongoose"
import projet from "./projet.js"
import unitéderecherche from "./unitéderecherche.js";
import user from "./user.js";

const categorieSchema=mongoose.Schema({
    Nom_Prenom:{ type: String, required: true },
    email:{ type: String},
    password:{ type: String},
    sexe:{ type: String},
    grade:{type: String},
    last_diplome:{type: String},
    universite:{ type: String},
    etablissement:{ type: String},
    motclé:{ type: String},
    birthday_place:{ type: String},
    Fonctionnalités:{ type: String},
    //utlisateurRef: {type:mongoose.Schema.Types.ObjectId, ref:user},
    projetRef: {type:mongoose.Schema.Types.ObjectId, ref:projet},
    uniteRef: {type:mongoose.Schema.Types.ObjectId, ref:unitéderecherche}

})
const chercheur = mongoose.model('chercheur', categorieSchema);
export default chercheur