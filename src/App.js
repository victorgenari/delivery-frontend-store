// Rotas
import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from './pages/Home';

import { ProductCreation } from "./pages/Products/ProductCreation";
import { ProductListing } from "./pages/Products/ProductListing";
import { ProductListingForID } from "./pages/Products/ProductListingForID";
import { ProductEditing } from "./pages/Products/ProductEditing";

import { CategoriesCreation } from "./pages/Categories/CategoriesCreation";
import { CategoriesListing } from "./pages/Categories/CategoriesListing";
import { CategoriesEditing } from "./pages/Categories/CategoriesEditing";

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

        <Route path="/categories-creation" element={<CategoriesCreation />} />
        <Route path="/categories-listing" element={<CategoriesListing />} />
        <Route path="/categories-editing/:id" element={<CategoriesEditing />} />

      </Routes>

    </>

  );
}

export default App;