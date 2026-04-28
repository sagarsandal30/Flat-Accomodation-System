const mongoose=require("mongoose");

const paymentSchema=new mongoose.Schema({
    tenantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
    },
    flatId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flat",
        required: true,
    },
    amount:{
        type: Number,
        required: true,
        min: 0,
    },
    paymentDate:{
        type: Date,
        default: Date.now,
    },
    paymentMethod:{
        type: String,
        enum: ["Credit Card", "Debit Card", "Bank Transfer", "Cash"],
        required: true,
    },
    status:{
        type: String,
        enum: ["Pending", "Completed", "Failed"],
        default: "Pending",
    },
},
{
    timestamps: true,
}

);

module.exports=mongoose.model(PaymentAddress,paymentSchema);