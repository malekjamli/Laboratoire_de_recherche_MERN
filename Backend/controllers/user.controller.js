
import jwt from "jsonwebtoken"
import user from "../models/user.js";
export const createUser = async (req, res) => {
    const newUser = new user(req.body)
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const generateAccessToken = (use) => {
    return jwt.sign({ use }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
}
export const getuserBYEmail = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user1 = await user.find({ email, password });
        if (user1 == "") {
            res.status(401).send('utilisateur non existant');
            return
        };
        const accessToken = generateAccessToken(user1);
        res.status(200).json({
            accessToken

        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getUser = async (req, res) => {
    try {
      const user1 = await
    user.find();
      res.status(200).json(user1);
}
    catch (error) {
        res.status(404).json({ message: error.message });
}}