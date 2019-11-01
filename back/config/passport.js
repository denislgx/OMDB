const User = require("../db/models/users");
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(function(user) {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    function(email, password, done) {
      User.findOne({ where: { email: email } })
        .then(user => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.authenticate(password)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);

module.exports = passport;
