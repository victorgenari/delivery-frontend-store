import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { ProductsFilter } from "../pages/ProductsFilter"
import { SignUp } from "../pages/SignUp"
import { SignIn } from "../pages/SignIn"
import { Requests } from "../pages/Requests"
import { ProductCreation } from "../pages/Products/ProductCreation"
import { ProductListing } from "../pages/Products/ProductListing"
import { ProductListingForID } from "../pages/Products/ProductListingForID"
import { ProductEditing } from "../pages/Products/ProductEditing"
import { CategoriesCreation } from "../pages/Categories/CategoriesCreation"
import { CategoriesListing } from "../pages/Categories/CategoriesListing"
import { CategoriesEditing } from "../pages/Categories/CategoriesEditing"
import ProtectedRoutes from '../components/ProtectedRoutes'

export function RoutesApp() {

    return (
        <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/" element={<Home />} />

                <Route path="/requests" element={<Requests />} />

                <Route path="/categories/listing" element={<CategoriesListing />} />
                <Route path="/categories/creation" element={<CategoriesCreation />} />
                <Route path="/category/editing/:id" element={<CategoriesEditing />} />

                <Route path="/products/creation" element={<ProductCreation />} />
                <Route path="/product/editing/:id" element={<ProductEditing />} />
            </Route>

            <Route path="/home" element={<Home />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            <Route path="/products/category" element={<ProductsFilter />} />
            <Route path="/products/category/:categoryId" element={<ProductsFilter />} />

            <Route path="/products/listing" element={<ProductListing />} />
            <Route path="/product/listing/for/id/:id" element={<ProductListingForID />} />
        </Routes>
    )
}