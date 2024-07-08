import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <NavBar />
      <div className="App">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </div>
      <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
