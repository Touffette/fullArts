const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boxSchema = new Schema({
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
      arts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Art",required:false }],
      partnerAccess:[{ type: mongoose.Schema.Types.ObjectId, ref: "User",required:false }],
      size: {
        type: Number,
        required: true,
        enum: [1, 2]
      }
})    //check if there is a story of a person,its yes we adding him in the partnerAccess 

const Box = mongoose.model("Box", boxSchema);
module.exports = Box;
