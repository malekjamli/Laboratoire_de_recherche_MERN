import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const app=express();
app.use(express.json());
import adminRouter from "./Routes/admin.route.js"
import chercheurRouter from"./Routes/chercheur.route.js"
import projetRouter from "./Routes/projet.route.js"
import unitéderechercheRouter from "./Routes/unitéderecherche.route.js"
import userRouter from "./Routes/user.route.js"

//connexion à la base de donnees
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true, 
    useUnifiedTopology:true})
.then(()=>{console.log("coneexion à la base de données réussie");})
.catch(err =>{
    console.log('Impossible de se connecter à la base de données',
    err);
    process.exit();
});
app.use('/api/admin',adminRouter)
app.use('/api/chercheur',chercheurRouter)
app.use('/api/projet',projetRouter)
app.use('/api/unitederecherche',unitéderechercheRouter)
app.use('/api/users',userRouter)

app.get('/',function(req,res){
    res.send('page de demarrage')
})
app.listen(process.env.PORT,() =>{
    console.log(`Serveur run at port ${process.env.PORT}`)
})
