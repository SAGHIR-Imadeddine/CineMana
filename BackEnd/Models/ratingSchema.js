import mongoose from "mongoose";

const { Schema } = mongoose;

const RatingSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    movie : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie',
    },
    rating : {
        type : Number,
        required : true,
    }
}, {timestamps : true});


export const RatingModel = mongoose.model('Rating', RatingSchema);

