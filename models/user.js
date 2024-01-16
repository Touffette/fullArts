const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName:{
    type: String,
    required: true,
  },
  bio:{
  type:String,
  required:true
  },
  imageUrl:{
    type:String,
    required:false
   },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: false,
  },
  dateBirth: {
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  genre: {
    drawer: {
      type: Boolean,
      required: false,
      default: false,
    },
    musician: {
      type: Boolean,
      required: false,
      default: false,
    },
    writer: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  imageProfilUrl:{
    type:String,
    required:false
   }
  ,
  time: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
  },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User",required:false }],
  subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User",required:false }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
