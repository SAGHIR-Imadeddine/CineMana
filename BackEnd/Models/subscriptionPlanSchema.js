import mongoose from "mongoose";

const { Schema } = mongoose;

const SubscriptionPlanSchema = new Schema({
    plan : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    duration : {
        type : String,
        required : true,
    },
    description : {
        type     : String,
        required : true,
    },
    deletedAt : {
        type     : Date,
        default  : null, 
    }
}, {timestamps : true});


export const SubscriptionPlanModel = mongoose.model('SubscriptionPlan', SubscriptionPlanSchema);

