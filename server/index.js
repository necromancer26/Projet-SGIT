const express = require("express");
const app = express();
var cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const db = require("./Config/dbConfig");
const routeProduit = require("./Router/routeProduit");
const routeSociete = require("./Router/routeSociete");
const routeUtilisateur = require("./Router/routeUtilisateur");

//---------------------------------END OF IMPORT------------------------//
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: "secretcode", resave: true, saveUninitialized: true })
);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser("secretcode"));

db.connect(function (error) {
  if (!!error) {
    throw error;
  } else {
    console.log("Connected..!");
  }
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
app.use("/api/produit", routeProduit);
app.use("/societe", routeSociete);
app.use("/", routeUtilisateur);
//---------------------------------END OF MIDDLEWARE------------------------//
