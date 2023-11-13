import CartProvider from "./store/CartProvider";
import { AuthProvider } from "./store/auth-context";

import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import ErrorPage from "./pages/Error";
import ContactPage from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetail";
import AuthPage from "./pages/Auth";
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       { path: "/", element: <HomePage /> },
  //       { path: "/about", element: <AboutPage /> },
  //       { path: "/products", element: <StorePage /> },
  //       { path: "/products/:productId", element: <ProductDetailPage /> },
  //       { path: "/contact", element: <ContactPage /> },
  //     ],
  //   },
  // ]);

  return (
    <AuthProvider>
      <CartProvider>
        {/* <RouterProvider router={router} /> */}
        <RootLayout>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route exact path="/products" element={<StorePage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </RootLayout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
