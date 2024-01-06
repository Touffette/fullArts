const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artSchema = new Schema({
  genre:{
    type:string,
    required:true
  },
    commitId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Repository",
        required: true,
    },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  themes: {
    type: [String], 
    required: true
  },
  title: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: false,
  },
  scenario: {
    type: string,
    required: true,
  },
  imageUrl:{
    type:String,
    required:false
   },
  public: {
    type:Boolean,
    default:false,
    required:true
  },
  time: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
  },
  partnerAccess:[{ type: mongoose.Schema.Types.ObjectId, ref: "User",required:false }],
  ageRating:{
    type:Number,
    required:true
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Art = mongoose.model("Art", artSchema);
module.exports = Art;
