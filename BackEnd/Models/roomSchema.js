import mongoose from "mongoose";
import { MediaSchema } from "./mediaSchema.js";

const { Schema } = mongoose;

const RoomSchema = new Schema({ 
    room : {
        type     : String,
        required : true,
        trim     : true,
    },
    roomImg : {
        type     : [MediaSchema],
        required : true,
    },
    type : {
        type     : String,
        required : true,
        trim     : true,
    },
    capacity : {
        type     : Number,
        required : true,
    },
    rows : {
        type     : Number,
        required : true,
    },
    cols : {
        type     : Number,
        required : true,
    },
    isAvailable : {
        type     : Boolean,
        default  : true,
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'User'
    },
    deletedAt : {
        type     : Date,
        default  : null, 
    }
}, {timestamps : true});


export const RoomModel = mongoose.model('Room', RoomSchema);

