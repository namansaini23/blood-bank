import mongoose, { connect } from "mongoose";


const connectDb = async (DATABASE_URL) =>{
    try{
        const DB_OPTION = {
            dbName: "blood_bank"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTION)
        console.log("CONNECTION SUCCESSFULY.......")
    }catch(error){
                console.log(error)
    }
}

export default connectDb