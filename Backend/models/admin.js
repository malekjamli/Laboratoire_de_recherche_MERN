import mongoose from "mongoose"

const adminSchema=mongoose.Schema({
    email:{type: String, required: true ,unique:true},
    motdepasse:{ type: String, required: true },
    utlisateurRef: {type:mongoose.Schema.Types.ObjectId, ref:'user' },
    unitéderechercheRef: {type:mongoose.Schema.Types.ObjectId, ref:'unitéderecherche'},
    chercheurRef: {type:mongoose.Schema.Types.ObjectId, ref:'chercheur'},
    projetRef: {type:mongoose.Schema.Types.ObjectId, ref:'projet'},
   
})
const admin=mongoose.model('admin',adminSchema);
export default admin