import mongoose from "mongoose";
import userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt  from "jsonwebtoken";

class UserController {
    static userRegistration = async (req, res) => {
        const { name, email, password, password_confirmation, tc } = req.body
        const user = await userModel.findOne({email:email})
        if (user) {
            res.send({ "status": "failed", "message": "email already exists" })
        } else {
            if (name && email && password && password_confirmation && tc) {
                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const doc = new userModel({
                            name: name,
                            email: email,
                            password: hashPassword,
                            tc: tc,
                            blood_group: blood_group
                        })
                        await doc.save()
                        const saved_user = await userModel.findOne({email:email})
                            //gernerate jwt token
                            const token = jwt.sign({ userID: saved_user._id}, process.env.
                            JWT_SECRET_KEY, { expiresIn: '5d'})
                            res.status(201).send({ "status":"success", "message":"registreation successfully done!!", "token": token, "userID": saved_user.user._id})
                    } catch (error) {
                        console.log(error)
                        res.send({ "status": "failed", "message": "unable to register" })
                    }
                } else {
                    res.send({ "status": "failed", "message": "password and comfirmed passsword doesnot match" })
                }
            } else {
                res.send({ "status": "failed", "message": "all field are reqired" })
            }
        }
    }
    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body
            if (email && password) {
                const user = await userModel.findOne({ email: email })
                if (user != null) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if ((user.email === email) && isMatch) {
                        // gernate  jwt token
                        //gernerate jwt token
                        const token = jwt.sign({ userID: user._id }, process.env.
                            JWT_SECRET_KEY, { expiresIn: '5d'})
                            res.status(201).send({ "status":"success", "message":"registreation successfully done!!", "token": token})
                        res.send({ "status": "success", "message": "login successful" })
                    } else {
                        res.send({ "status": "failed", "message": "email or password does not match " })
                    }
                } else {
                    res.send({ "status": "failed", "message": "you are not register ", "token":token })
                }
            } else {
                res.send({ "status": "failed", "message": "all fields are reqired" })
            }
        } catch (error) {
            res.send({ "status": "failed", "message": "login failed" + error})
        }
    }
    static changePassword = async(req,res)=>{
        const  {password, password_confirmation} = req.body
        if(password && password_confirmation){
            if(password === password_confirmation){
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                //console.log(req.user._id)
                await userModel.findByIdAndUpdate(req.user._id, { $set: { password: hashPassword }})
                res.send({ "status": "success", "message": "password changed succeefully"})
            }else{
                res.send({ "status": "failed", "message": "fields does not matches"})
            }
        }else{
            res.send({ "status": "failed", "message": "all field are required"})
        }
    }

    static loggedUser = async(req, res) =>{
        res.send({ "user": req.user })
    }
    static sendUserPasswordResetEmail = async(req, res) =>{
        const {email} = req.body
        if(email){
            const user = await userModel.findOne({email: email })
            if(user){
                const secret = user._id + process.env.JWT_SECRET_KEY
                const token = jwt.sign({ userID: user._id}, secret, {expiresIn: '15m'})
                const link =  `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
                console.log(link)
                res.send({"status":"success", "message":"email link has been gernated successfully..... plz check your email"})
            }else{
                res.send({"status":"failed", "message":"email doest registered"})
            }
        }else{
            res.send({"status":"failed", "message":"enter email"})
        }
    }

    static userPasswordReset = async(req, res) =>{
        const {password, password_confirmation} = req.body
        const {id, token} = req.params
        const user = await userModel.findById(id)
        const new_secret = user._id + process.env.JWT_SECRET_KEY
        try{
            jwt.verify(token, new_secret)
            console.log(token, new_secret)
            if(password && password_confirmation){
                if(password !== password_confirmation){
                    res.send({"status":"failed", "message":"both passwords not matches"})
                }else{
                    const salt = await bcrypt.genSalt(10)
                    const newHasedPassword = await bcrypt.hash(password, salt)
                    await userModel.findByIdAndUpdate(user._id, { $set: { password: newHasedPassword}})
                    res.send({"status": "success", "message": "password reset successfully"})
                }
                res.send({"status":"failed", "message":"enter both fields"})
            }
        }catch(error){
            console.log(error)
            res.send({"status":"failed", "message":"invalid"})
        }
    }
 /*   static bloodDonation = async(req, res) =>{
        const {blood_group: req_blood_group,purpose} = req.body
        if(!req_blood_group){
            res.send({ "status": "failed", "message": "blood group already exists" })
        }else{
            if(req_blood_group && purpose){
                try{
                    await userModel.findByIdAndUpdate(req.userID, { $set: { blood_group: req_blood_group, purpose:purpose}})
                    res.send({"status": "success", "message": "blood gorup and purpose added successfully"})
                }
                catch(error){
                    console.log(error)
                    console.log(req.userID)
                    res.send({"status":"failed", "message":"invalid"})
                }
            }
        }
    }*/
    static bloodDonation = async (req, res) => {
        const { blood_group: req_blood_group, purpose } = req.body;
        //res.send({ "userID": req.body })
        const { userID } = req.body;
        const user = req.user 
        if (!req_blood_group) { 
            res.send({ "status": "failed", "message": "user doesnot add blood" });
        } else {
            if (req_blood_group && purpose) {
                try {
                    //const secret =  user._id + process.env.JWT_SECRET_KEY
                    //const token = jwt.sign({ userID: user._id}, secret)
                    const account = user._id
                    console.log(account)
                    await userModel.findByIdAndUpdate(userID, { $set: { blood_group: req_blood_group, purpose: purpose, userID } });

                    //console.log(userID);
                    res.send({ "status": "success", "message": "blood group and purpose added successfully"+req_blood_group+purpose+user });
                } catch (error) {
                    console.log(error);
                    console.log(userID); // Check if req.user._id is defined
                    res.send({ "status": "failed", "message": "invalid" });
                }
            }
        }
    };
    
    

}
export default UserController