import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import ChiSiamo from "./pages/ChiSiamo";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/prodotti" element={<Products />} />
        <Route path="/prodotti/:id" element={<ProductDetail />} />
      </Routes>
      <Main />

      <Footer />


    </>
  );
}

export default App;
