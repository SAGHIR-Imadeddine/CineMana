import mongoose from "mongoose";

const { Schema } = mongoose;

const LikeSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    movie : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie',
    },
    like : {
        type : Number,
        required : true,
    }
}, {timestamps : true});


export const LikeModel = mongoose.model('Like', LikeSchema);