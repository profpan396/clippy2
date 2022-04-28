const Clip = require('../models/clip');

module.exports = {
  index,
  show,
  new: newClip,
  create
};
function index(req, res) {
  Clip.find({}, (err, clips) => {
    clips.reverse();
    res.render('clips/index', {clips, hostname: req.hostname});
  });
}
function show(req, res) {
  Clip.findOne({ _id: req.params.id },(err, clip) => {
    res.render('clips/show', {clip, hostname: req.hostname});
  });
}
function newClip(req, res) {
  res.render('clips/new');
}
function create(req, res) {
  var clipUrl = req.body.clipUrl;
  var match = clipUrl.match(/https:\/\/clips\.twitch\.tv\/(?<uid>[A-z0-9\-]+)/m);
  if (match.groups) {
    var embeddedUrl = `https://clips.twitch.tv/embed?clip=${match.groups.uid}&parent=${req.hostname}`;
    req.body.user = req.user._id;
    req.body.Url = embeddedUrl;
    var newClip = new Clip(req.body);
    console.log(newClip);
    newClip.save(() => {
      res.redirect('/clips');
    });    
  } else {
    res.redirect('/clips');
  }
}
