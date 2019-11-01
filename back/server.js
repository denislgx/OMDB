const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("./config/passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db = require("./db/db");
const routes = require("./routes/index");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session()); // passport

app.use("/api", routes);
app.get("/*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

db.sync({ force: false }).then(() =>
  app.listen(8080, () => console.log("ESCUCHANDO EN EL PUERTO 8080"))
);
