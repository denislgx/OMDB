const Sequelize = require("sequelize");
const Crypto = require("crypto");
const db = require("../db");

class User extends Sequelize.Model {}
User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    salt: {
      type: Sequelize.STRING
    }
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate(user => {
  user.salt = Crypto.randomBytes(20).toString("hex");
  user.password = Crypto.createHmac("sha1", user.salt)
    .update(user.password)
    .digest("hex");
}); //

User.prototype.hashFunction = function(password) {
  return Crypto.createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
}; // FUNCTION HASH QUE ME ALMACENA EL PASS HASHEADO DE MANERA QUE NO QUEDE COMO TEXTO PLANO EN DB

User.prototype.authenticate = function(password) {
  return this.hashFunction(password) === this.password;
}; // VALIDA SI EL PASS INGRESADO EN TEXTO PLANO POR EL USUARIO YA REGISTRADO TIENE SU CORRESPONDIENTE HASHEADO EN LA DB

module.exports = User;
