import { Switch, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar/navbar";
import Homepage from "./Pages/Homepage/Homepage";
// import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import NavItem from "./Components/Navbar/NavItem/NavItem";
import Contact from "./Pages/Contact/Contact";
// import CustomNavbar from "./Components/CustomNavbar/CustomNavbar";
import NeoNavbar from "./Components/NeoNavbar/NeoNavbar";
import About from "./Pages/About/About";
import Logiciel from "./Pages/Logiciels/logiciel";
import EnCour from "./Pages/EnCour/EnCour";
import TestingDb from "./Pages/TestingDb/TestingDb";
import AddProduit from "./Pages/AddProduit/AddProduit";
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
        <Route exact path="/test" component={TestingDb} />
        <Route exact path="/Produit" component={AddProduit} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
