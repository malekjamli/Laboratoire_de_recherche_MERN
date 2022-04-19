import mongoose from "mongoose"
const projetSchema=mongoose.Schema({
    titre:{ type: String, required: true ,unique:true},
    specific_challenge:{type: String, required: true,unique:true },
    scope:{type: String, required: true,unique:true},
    Expected_Impact:{ type: String, required: true ,unique:true},
    Typeofaction:{type: String, required: true,unique:true},
    url:{type: String, required: true,unique:true},
    motcle:{type: String, required: true,unique:true},
    date_début:{type: String, required: true,unique:true},
    date_fin:{type: String, required: true,unique:true},


})
const projet = mongoose.model('projet',projetSchema);
export default projet