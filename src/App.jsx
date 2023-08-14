import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/hompage/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/applayout/AppLayout";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="app" element={<AppLayout />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
