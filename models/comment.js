const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    artId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Art",
        required: true,
      },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false // Change this to true if author is required
  },
  date: {
    type: Date,
    default: Date.now,
  },
 
  time: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
  },
  father: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: null // Définition du champ comme étant nullable, par défaut à null
},
likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;