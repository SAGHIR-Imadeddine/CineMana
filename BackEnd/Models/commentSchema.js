import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    movie : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie',
    },
    comment : {
        type : String,
        required : true,
    }
}, {timestamps : true});


export const CommentModel = mongoose.model('Comment', CommentSchema);

