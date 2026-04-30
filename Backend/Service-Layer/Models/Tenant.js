const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema(
  {
    // 🔗 Reference to User (for login system)
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 👤 Basic Details
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },
    address:{
        type: String,
        required: true,
    },
    
    // 🏢 Flat Assignment
    flatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flat",
      required: true,
    },

    // 📅 Stay Details
    moveInDate: {
      type: Date,
      required: true,
    },

    moveOutDate: {
      type: Date,
      default: null,
    },

    // 💰 Financial
    securityDeposit: {
      type: Number,
      required: true,
      min: 0,
    },
    rentAmount: {
      type: Number,
      required: true,
    },

    // 📄 Identity Proof
    idProofType: {
      type: String,
      enum: ["Aadhar", "PAN", "Passport", "Driving License"],
      required: true,
    },

    idProofNumber: {
      type: String,
      required: true,
    },

    // 👨‍👩‍👧 Extra Details
    occupation: {
      type: String,
      enum: ["Student", "Working Professional", "Business", "Other"],
      default: "Other",
    },

    familyMembers: {
      type: Number,
      default: 1,
      min: 1,
    },

    emergencyContact: {
      name: String,
      phone: String,
    },

    // 📊 Status
    status: {
      type: String,
      enum: ["Active", "Moved Out"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tenant", tenantSchema);