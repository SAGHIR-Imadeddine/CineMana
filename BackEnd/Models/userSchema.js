import mongoose from "mongoose";
import { MediaSchema } from "./mediaSchema.js";
import { SubscriptionSchema } from "./subscriptionSchema.js";

const { Schema } = mongoose;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
        minLength : 3,
        trim : true,
    },
    familyName : {
        type : String,
        required : true,
        minLength : 3,
        trim     : true,
    },
    age : {
        type : Number,
        required : true,
    },
    gender : {
        type     : String,
        
        required : true,
        trim     : true,
    },
    image : {
        type : MediaSchema,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique   : [true, "This email already exists!!"],
        trim     : true,
    },
    password : {
        type     : String,
        required : true,
        trim     : true,
    },
    role : {
        type     : String,
        required : true,
        enum     : ['admin', 'user'],
        default  : 'user',
    },
    isSubscribed : {
        type     : SubscriptionSchema,
        default  : null,
    },
    createdBy : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'User',
        default : null
    },
    deletedAt : {
        type     : Date,
        default  : null, 
    }
}, {timestamps : true});


export const UserModel = mongoose.model('User', UserSchema);

