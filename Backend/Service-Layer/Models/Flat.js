const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({

    // 🏢 Flat Details
    flatNumber: {
        type: String,
        required: true,
        trim: true,
    },
    flatType:{
        type: String,
        required: true,
        enum:["1BHK","2BHK","3BHK"]
    },
    buildingName: {
        type: String,
        required: true,
        trim: true,
    },
    floor:{
        type: Number,
        required: true,
        min: 0,
    },
    address: {
        type: String,
        required: true,
    },
    rentAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    availabilityStatus: {
        type: String,
        enum: ["Vacant", "Occupied", "Under Maintenance"],
        required:true
    },
    // 🔗 Reference to Owner
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    // 🖼 Flat Images
    images: [
        {
            type: String,
            default: "",
        },
    ],
    // 📝 Description
    description: {
        type: String,
        default: "",
    },
},
    {
        timestamps: true,
}
);