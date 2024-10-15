import mongoose from "mongoose";

const { Schema } = mongoose;

const ReservationSchema = new Schema({
    reference : {
        type : String,
        required : true,
        trim : true,
    },
    seatsNbr : {
        type : String,
        required : true,
        trim     : true,
    },
    totalPaid : {
        type : Number,
        required : true,
    },
    deletedAt : {
        type     : Date,
        default : null, 
    }
}, {timestamps : true});


export const ReservationModel = mongoose.model('Reservation', ReservationSchema);

