import mongoose from "mongoose";

const { Schema } = mongoose;

const BanSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    banMotive : {
        type : String,
        required : true,
    },
    banDuration : {
        type     : String,
        required : true, 
    },
    deletedAt : { // count soft deleted banns to ban permanantly
        type     : Date,
        default  : null, 
    }
}, {timestamps : true});


export const BanModel = mongoose.model('Ban', BanSchema);

