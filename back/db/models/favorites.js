const Sequelize = require("sequelize");
const User = require("./users");
const db = require("../db");

class Favorites extends Sequelize.Model {}
Favorites.init(
  {
    film: {
      type: Sequelize.JSON
    },
    imdbID: {
      type: Sequelize.STRING
    }
  },
  { sequelize: db, modelName: "favorites" }
);

Favorites.belongsTo(User);

module.exports = Favorites;
