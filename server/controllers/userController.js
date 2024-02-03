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
                            tc: tc
                        })
                        await doc.save()
                        const saved_user = await userModel.findOne({email:email})
                            //gernerate jwt token
                            const token = jwt.sign({ userID: saved_user._id}, process.env.
                            JWT_SECRET_KEY, { expiresIn: '5d'})
                            res.status(201).send({ "status":"success", "message":"registreation successfully done!!", "token": token})
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
}
export default UserController