const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({

    // 🏢 Flat Details
    flatNumber: {
        type: String,
        required: true,
        trim: true,
    },
    buildingName: {
        type: String,
        required: true,
        trim: true,
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
        enum: ["Available", "Occupied", "Under Maintenance"],
        default: "Available",
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