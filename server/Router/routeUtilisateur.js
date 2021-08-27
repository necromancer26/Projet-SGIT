/*----------------------------Imports--------------------------------------*/
var express = require("express");
var db = require("../Config/dbConfig");
var router = express.Router();
const bcrypt = require("bcryptjs");
const passportHttp = require("passport-http");
const logout = require("express-passport-logout");
const expressPassportLogout = require("express-passport-logout");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
/*----------------------------Middleware--------------------------------------*/
router.use(passport.initialize());
router.use(passport.session());
require("../Config/passportConfig")(passport);
/*----------------------------Routes--------------------------------------*/
router.post("/register", async (req, res) => {
  const { nomUtilisateur, pseudoUtilisateur, mdpUtilisateur, mdpConfirm } =
    req.body;
  const hashedPassword = await bcrypt.hash(mdpUtilisateur, 10);
  const sqlInsert =
    "INSERT INTO utilisateur (NomUtilisateur,PseudoUtilisateur,MotDePasse) VALUES (?,?,?)";
  db.query(
    sqlInsert,
    [nomUtilisateur, pseudoUtilisateur, hashedPassword],
    (err, result) => {
      err ? console.log(err) : null;
    }
  );
});
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) console.log("No User received");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});
router.get("/user", (req, res) => {
  // console.log("req.user :::", req.user);
  res.status(200).send(req.user);
});
router.get("/logout", (req, res) => {
  req.logout();
  res.send({ message: "Successfully logged out" });
});
module.exports = router;
