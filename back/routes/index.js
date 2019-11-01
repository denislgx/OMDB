const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../db/models/users");
const Favorites = require("../db/models/favorites");

router.post("/register", (req, res) => {
  User.create(req.body).then(user => res.status(200).send(user));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.body.email);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

router.post("/addFav", (req, res) => {
  Favorites.create({ film: req.body }).then(newFav => {
    newFav.setUser(req.user.id);
    res.send(newFav);
  });
});

router.get("/myfavs", (req, res) => {
  Favorites.findAll({
    where: {
      userId: req.user.id
    }
  }).then(favorites => res.send(favorites));
});

router.get("/me", (req, res) => {
  res.send(req.user);
});

router.delete("/removeFav", (req, res) => {
  // console.log("REMOVEFAVVVVVV", req.body); llega...
  Favorites.destroy({
    where: {
      film: req.body,
      userId: req.user.id
    }
  }).then(rem => res.send(rem));
});

module.exports = router;
