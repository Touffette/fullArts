const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commitSchema = new Schema({

    repositoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Repository",
        required: true,
    },

    title: {
        type: string,
        required: true,
      },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      time: {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date }
      },
     
      partnerAccess:[{ type: mongoose.Schema.Types.ObjectId, ref: "User",required:false }],
})    //check if there is a story of the box in this commit of a person,its yes we adding him in the partnerAccess 

const Commit = mongoose.model("Commit", userSchema);
module.exports = Commit;

//boxes:[{ type: mongoose.Schema.Types.ObjectId, ref: "Box",required:false }],