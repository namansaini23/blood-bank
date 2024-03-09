import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
    user_id: { type: String, required: true, trim: true },
    blood_group: {type:String, required:true, trim:true},
    quantity: { type: Number, required: true, trim: true },
    deadline: { type: Date, required: true, trim: true },
    hospital_name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    status: { type: Boolean, required: true, trim: true },}
);

const adModel = mongoose.model("ad",adSchema);