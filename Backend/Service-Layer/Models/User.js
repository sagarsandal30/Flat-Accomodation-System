const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
  
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    // 🔐 Password
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    confirmPassword:{
        type: String,
        required: true,
        minlength: 6,
    },

    // 👥 Role
    role: {
      type: String,
      enum: ["Owner", "Tenant"],   // 🔥 Changed
      default: "Tenant",
    },

    // 🏢 Owner-specific info
    ownedFlats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flat",
      },
    ],


    // 🖼 Profile
    profileImage: {
      type: String,
      default: "",
    },
},
  {
    timestamps: true,
  }
);


UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) 
    return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  
});
// Helper method to compare passwords
UserSchema.methods.comparePassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};


module.exports=mongoose.model("User" , UserSchema);