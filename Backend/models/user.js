
import mongoose from "mongoose"
var userSchema = mongoose.Schema({
    name:{ type: String, required: true },
    email:{type: String, required: true ,unique:true},
    numtlf:{type: Number, required: false },
    motdepasse:{ type: String, required: true },
    adresse:{ type: String, required: true },
   
});
const user=mongoose.model('user',userSchema)
export default user







