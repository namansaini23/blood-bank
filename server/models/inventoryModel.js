const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory type reqired'],
        enum:['in','out'],
    },
    oubloodGroup:{
        type:String,
        required:[true,'blood group is reqired'],
        enum:['a+','a-','b+','b-','ab+','ab-','o+','o-']
    },
    quantity:{
        type:Number,
        required:[true,'blood quantity is reqired']
    },
    organisation:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organisation is reqired']
    },
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType === "out"
        }
    },
    donar:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType === "in"
        }
    }

}
    {timestamps: true}
)

module.exports = mongoose.model('Inventory', inventorySchema)