import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListing />,
    errorElement: "404 Not Found, go back now!",
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
