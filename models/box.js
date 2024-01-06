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
      art: [{ type: mongoose.Schema.Types.ObjectId, ref: "Art",required:false }],
      partnerAccess:[{ type: mongoose.Schema.Types.ObjectId, ref: "User",required:false }],
})    //check if there is a story of a person,its yes we adding him in the partnerAccess 

const Box = mongoose.model("Box", boxSchema);
module.exports = Box;
