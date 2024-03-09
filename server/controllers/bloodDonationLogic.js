import mongoose from "mongoose";
import userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt  from "jsonwebtoken";

class bloodDonationLogic{
    // For recipient only.
    static async postAd(req,res) {
        const request = {
            user_id:101,
            blood_group:"A+",
            quantity:15,
            deadline:"timestamp()",
            hospital_name:"fortis",
            city:"Ludhiana",
            status:"pending"
        }
    }
    static getAllAds = async(req,res) => {
        const collectionName = 'recipient_ad_table';
        const collection = db.collection(collectionName);
        collection.find({}).toArray()
        .then(documents => {
          // Process retrieved documents
          console.log('Retrieved documents:');
          console.log(documents);
        })
        .catch(err => {
          console.error('Error occurred while querying the collection:', err);
        })
    }

    static async bloodTransanction(req,res) {
        const request = {
            recipient_id:101,
            donor_id:102,
            quantity:15,
            blood_group:"A+",
            hospital_name:"fortis"
        }
        const recipient_ad_table_columns = {
            recipient_id:101,
            donor_id:102,
            quantity:15,
            timestamp,
            blood_group,
            hospital_name
        }
    }
    //static async getAllBloodTransanctions(req,res) {   }
}
export default bloodDonationLogic;