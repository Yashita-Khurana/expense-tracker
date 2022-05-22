const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//create schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      required: [true, "First name is required"],
      type: String,
    },
    lastname: {
      required: [true, "Last name is required"],
      type: String,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      required: [true, "Hei buddy Password is required"],
    },

    isAdmin: {
        type: Boolean,
        default: false,
      },
    },
      {
        timestamps: true,
      }
    );


    //Compile schema into model
const User = mongoose.model("User", userSchema);

module.exports = User;