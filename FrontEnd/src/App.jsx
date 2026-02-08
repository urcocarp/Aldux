import { Routes, Route } from "react-router-dom";

import Landing from "./View/landing/landing";
import Products from "./View/Products";
import ProductDetail from "./View/ProductDetail";
//import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Landing />} />

      {/* Listado de productos */}
      <Route path="/productos" element={<Products />} />

      {/* Detalle de producto (ruta dinámica) */}
      <Route path="/productos/:slug" element={<ProductDetail />} />

      {/* 404 */}
      {/* {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  );
}
