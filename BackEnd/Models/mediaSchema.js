import mongoose from "mongoose";

const { Schema } = mongoose;

export const MediaSchema = new Schema({
    fileName : {
        type : Number,
        required : true,
    },
    mediaType : {
        type : String,
        required : true,
    },
    mediaURL : {
        type : String,
        required : true,
    }
}, {timestamps : true});


export const MediaModel = mongoose.model('Media', MediaSchema);

