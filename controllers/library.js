const library = require('../models/library');

module.exports = {
    index,
    new: libraryClips

};

function index(req, res) {
  library.find({}, function(err, library){
    res.render('library/index', {title: 'library', library})
  }) 

};

function libraryClips(req, res) {
    res.render('library', {title: 'View Clips' });
}

