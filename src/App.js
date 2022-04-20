// Rotas
import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from './pages/Home';
import { ProductCreation } from "./pages/ProductCreation";
import { ProductListing } from "./pages/ProductListing";
import { ProductListingForID } from "./pages/ProductListingForID";
import { ProductEditing } from "./pages/ProductEditing";

// CSS
import { GlobalStyle } from "./styles/global";


function App() {
  return (

    <>

      <GlobalStyle />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product-creation" element={<ProductCreation />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-listing-for-id/:id" element={<ProductListingForID />} />
        <Route path="/product-editing/:id" element={<ProductEditing />} />

      </Routes>

    </>

  );
}

export default App;