import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors';
import jwt from "jsonwebtoken";


import adminRouter from "./Routes/admin.route.js"
import chercheurRouter from "./Routes/chercheur.route.js"
import projetRouter from "./Routes/projet.route.js"
import unitéderechercheRouter from "./Routes/unitéderecherche.route.js"
import userRouter from "./Routes/user.route.js"
import chercheur from "./models/chercheur.js"
import { auth } from "./middlewares/auth.js";

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

/*const user = {
    id: 42,
    name: 'Hassan',
    email: "hsan.hachicha@gmail.com",
    admin: true,
    password: "fantastic"
};*/
//connexion à la base de donnees
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("coneexion à la base de données réussie"); })
    .catch(err => {
        console.log('Impossible de se connecter à la base de données',
            err);
        process.exit();
    });


/*function generateaccesstoken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
}*/
//const accesstoken = generateaccesstoken(user);
//console.log(accesstoken);
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.use('/api/admin', adminRouter)
app.use('/api/chercheur', chercheurRouter)
app.use('/api/projet', projetRouter)
app.use('/api/unitederecherche', unitéderechercheRouter)
app.use('/api/users', userRouter)

app.get('/', function (req, res) {
    res.send('page de demarrage')
})
app.listen(process.env.PORT, () => {
    console.log(`Serveur run at port ${process.env.PORT}`)
})
/*app.post('/api/users/login', (req, res) => {
    if (req.body.email != user.email) {
        res.status(401).send('invalid email');
        return;
    }
    if (req.body.password != user.motdepasse) {
        res.status(401).send('invalid password');
        return;
    }
    const accesstoken = generateaccesstoken(user);
    console.log(accesstoken);
    res.send({
        accesstoken,
    })
})
app.get('/api/auth', auth, (req, res) => {
    res.send(req.user);
})*/
