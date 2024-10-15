import mongoose from "mongoose";

const { Schema } = mongoose;

const SessionSchema = new Schema({
    room : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Room',
    },
    movie : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie',
    },
    pricing : {
        type : Number,
        required : true,
    },
    scheduledAt : {
        type     : Date,
        required : true,
    },
    // endsAt : { schAt + movie duration
    //     type     : Date,
    //     required : true,
    // },
    deletedAt : {
        type     : Date,
        default  : null, 
    }
}, {timestamps : true});


export const SessionModel = mongoose.model('Session', SessionSchema);

