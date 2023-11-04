import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom"; // Use the appropriate Router for your environment

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Main />
        <Menu />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
