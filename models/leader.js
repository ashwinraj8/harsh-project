let mongoose = require('mongoose');
const { number } = require('prop-types');

let LeadSchema = mongoose.Schema({

    email:String,
    name: String,
    rank : Number,
    createdAt: {
        type: Date,
        default: Date.now
      },
      imageURL: String
});

module.exports = mongoose.model('publish',LeadSchema);