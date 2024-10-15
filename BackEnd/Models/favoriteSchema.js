import mongoose from "mongoose";

const { Schema } = mongoose;

const FavoriteSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    movie : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie',
    },
    favorite : {
        type : Number,
        required : true,
    }
}, {timestamps : true});


export const FavoriteModel = mongoose.model('Favorite', FavoriteSchema);

