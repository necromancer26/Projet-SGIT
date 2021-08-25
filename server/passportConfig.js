const bcrypt = require("bcryptjs");
const db = require("./dbConfig");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      const sqlSelect = "SELECT * FROM utilisateur WHERE PseudoUtilisateur = ?";
      db.query(sqlSelect, username, (err, resultFromQuery) => {
        if (err) {
          return done(err);
        }
        if (!resultFromQuery[0]) {
          console.log("username not matching");
          return done(null, false, { message: "User Or Password Error" });
        }
        if (resultFromQuery[0]) {
          bcrypt.compare(
            password,
            resultFromQuery[0].MotDePasse,
            (err, result) => {
              if (err) throw err;
              if (result === true) {
                return done(null, resultFromQuery[0]);
              } else {
                console.log("password not matching");
                return done(null, false, { message: "User Or Password Error" });
              }
            }
          );
        }
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.IDutilisateur);
  });
  passport.deserializeUser((id, done) => {
    const sqlSearchById = "SELECT * FROM utilisateur WHERE IDutilisateur = ? ";
    db.query(sqlSearchById, id, (err, result) => {
      const userInfo = {
        id: result[0].IDutilisateur,
        username: result[0].PseudoUtilisateur,
      };
      done(err, userInfo);
    });
  });
};