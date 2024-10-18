import mongoose from "mongoose";
import { MediaSchema } from "./mediaSchema.js";

const { Schema } = mongoose;

const MovieSchema = new Schema({
    title : {
        type     : String,
        required : true,
        trim       : true,
    },
    description : {
        type : String,
        required : true,
        minLength : 10,
        trim     : true,
    },
    release : {
        type : Date,
        required : true,
    },
    duration : {
        type : String,
        required : true,
        trim     : true,
    },
    imdb : {
        type     : Number,
        required : true,
    },
    genre : {
        type     : [String],
        required : true,
    },
    ageLimit : {
        type     : Number,
        required : true,
    },
    media : {
        type : [MediaSchema],
        required : true,
    },
    deletedAt : {
        type     : Date,
        default : null, 
    }
}, {timestamps : true});


export const MovieModel = mongoose.model('Movie', MovieSchema);

