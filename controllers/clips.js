const Clip = require('../models/clip');

module.exports = {
    index,
    new: newClip,

};

function index(req, res) {
  Clip.find({}, function(err, clips){
    res.render('clips/index', {title: 'clips', clips})
  }) 

};

function newClip(req, res) {
    res.render('clips/new', {title: 'Add Clips' });
}

