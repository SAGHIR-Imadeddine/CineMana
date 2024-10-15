import mongoose from "mongoose";

const { Schema } = mongoose;

export const SubscriptionSchema = new Schema({
    plan : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'SubscriptionPlan',
    },
    paymentDate : {
        type : Date,
    },
    endDate : {
        type     : Date,
        default  : null, 
    }
}, {timestamps : true});


export const SubscriptionModel = mongoose.model('Subscription', SubscriptionSchema);