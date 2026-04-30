const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName:{
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
    // 👥 Role
    role: {
      type: String,
      enum: ["owner", "tenant"],   // 🔥 Changed
      default: "tenant",
    },
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