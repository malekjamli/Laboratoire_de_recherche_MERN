import mongoose from "mongoose"
import projet from "./projet.js"
import unitéderecherche from "./unitéderecherche.js";
import user from "./user.js";

const categorieSchema=mongoose.Schema({
    sexe:{ type: String, required: true },
    grade:{type: String, required: true },
    last_diplome:{type: String, required: true , unique:true},
    universite:{ type: String, required: true },
    etablissement:{ type: String, required: true },
    motclé:{ type: String, required: true },
    birthday_place:{ type: String, required: false },
    Fonctionnalités:{ type: String, required: true },
    utlisateurRef: {type:mongoose.Schema.Types.ObjectId, ref:user},
    projetRef: {type:mongoose.Schema.Types.ObjectId, ref:projet},
    uniteRef: {type:mongoose.Schema.Types.ObjectId, ref:unitéderecherche}

})
const chercheur = mongoose.model('chercheur', categorieSchema);
export default chercheur