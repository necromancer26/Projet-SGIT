import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import NeoNavbar from "./Components/NeoNavbar/NeoNavbar";
import About from "./Pages/About/About";
import Logiciel from "./Pages/Logiciels/logiciel";
import EnCour from "./Pages/EnCour/EnCour";
import Login from "./Pages/Login/Login";
import Societe from "./Pages/societe/societe";
import AddProduit from "./Pages/AddProduit/AddProduit";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditProduit from "./Pages/EditProduit/EditProduit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NeoNavbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/logiciel" component={Logiciel} />
        <Route exact path="/EnCour" component={EnCour} />
        <Route exact path="/societe" component={Societe} />
        <Route exact path="/Produit" component={AddProduit} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Produit/:id" component={EditProduit} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
