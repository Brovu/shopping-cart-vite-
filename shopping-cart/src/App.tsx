import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
