import { lazy, useContext, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
// import StorePage from "./pages/Store";
// import ErrorPage from "./pages/Error";
// import ContactPage from "./pages/Contact";
// import ProductDetailPage from "./pages/ProductDetail";
// import AuthPage from "./pages/Auth";

import AuthContext from "./store/auth-context";
import CartProvider from "./store/CartProvider";

const AboutPage = lazy(() => import("./pages/About"));
const StorePage = lazy(() => import("./pages/Store"));
const ErrorPage = lazy(() => import("./pages/Error"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));
const AuthPage = lazy(() => import("./pages/Auth"));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <CartProvider>
      {/* <RouterProvider router={router} /> */}
      <RootLayout>
        <Routes>
          <Route
            path="/about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/auth"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <AuthPage />
              </Suspense>
            }
          />
          <Route
            exact
            path="/products"
            element={
              authCtx.isLoggedIn ? (
                <Suspense fallback={<p>Loading...</p>}>
                  <StorePage />
                </Suspense>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/products/:productId"
            element={
              authCtx.isLoggedIn ? (
                <Suspense fallback={<p>Loading...</p>}>
                  <ProductDetailPage />
                </Suspense>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ErrorPage />
              </Suspense>
            }
          />
        </Routes>
      </RootLayout>
    </CartProvider>
  );
}

export default App;
