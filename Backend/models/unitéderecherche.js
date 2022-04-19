import mongoose from "mongoose"
import chercheur from "./chercheur.js";

const unitéderechercheSchema=mongoose.Schema({
    nom_du_laboratoire:{ type: String, required: true,unique:true },
    Date_de_création:{type: String, required: true },
    établissement_dacceuil:{type: String, required: true },
    adresse:{ type: String, required: true },
    type:{ type: String, required: true }
    
    
})
const unitéderecherche = mongoose.model('unitéderecherche', unitéderechercheSchema);
export default unitéderecherche