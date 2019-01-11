module.exports = function(req, res, next) {
  if (req.user && req.user.admin) {
    next();
  } else {
    req.flash('error', 'You aren\'t cool enough');
    res.redirect('/profile');
  }
};