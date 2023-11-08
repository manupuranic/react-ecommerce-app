import CartProvider from "./store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import ErrorPage from "./pages/Error";
import ContactPage from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetail";
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/products", element: <StorePage /> },
        { path: "/products/:productId", element: <ProductDetailPage /> },
        { path: "/contact", element: <ContactPage /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      {/* <RootLayout />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/products">
          <StorePage />
        </Route>
        <Route path="/products/:productId">
          <ProductDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch> */}
    </CartProvider>
  );
}

export default App;
