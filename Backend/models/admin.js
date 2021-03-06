import mongoose from "mongoose"

const adminSchema=mongoose.Schema({
    email:{type: String, required: true ,unique:true},
    motdepasse:{ type: String, required: true },
    utlisateurRef: {type:mongoose.Schema.Types.ObjectId, ref:'user' },
    unit√©derechercheRef: {type:mongoose.Schema.Types.ObjectId, ref:'unit√©derecherche'},
    chercheurRef: {type:mongoose.Schema.Types.ObjectId, ref:'chercheur'},
    projetRef: {type:mongoose.Schema.Types.ObjectId, ref:'projet'},
   
})
const admin=mongoose.model('admin',adminSchema);
export default admin