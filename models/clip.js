const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
      match: /.{5,}/
   
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
const clipSchema = new Schema({
    contentUrl: {
        type: String,
        require: true
    },
    esrbRating: {
    type: String,
          enum: ['E', 'T', 'M', 'NR']
      },
      comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Clip', clipSchema);
