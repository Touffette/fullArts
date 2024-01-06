const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const repositorySchema = new Schema({
    //reflichir a qui appartient le repository quel id de qui mettre //est ce que si jutilise une oeuvre alors la personne est forcement dans le depot
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      title: {
        type: string,
        required: true,
      },
      time: {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date }
      },
     
})

const Repository = mongoose.model("Repository", userSchema);
module.exports = Repository;

//commits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Commit",required:false }],