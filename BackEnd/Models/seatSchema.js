import mongoose from "mongoose";

const { Schema } = mongoose;

const SeatSchema = new Schema({
    session : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Session',
    },
    reservation : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Reservation',
    },
    positionTag : {
        type : String,
        required : true,
        trim : true,
    },
    row : {
        type : Number,
        required : true,
    },
    col : {
        type : Number,
        required : true,
    },
    isVIP : {
        type     : Boolean,
        default : true,
    },
    deletedAt : {
        type     : Date,
        default : null, 
    }
}, {timestamps : true});


export const SeatModel = mongoose.model('Seat', SeatSchema);

