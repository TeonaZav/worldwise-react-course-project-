import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/product/Product";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/hompage/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/applayout/AppLayout";
import Login from "./pages/login/Login";
import CityList from "./components/citylist/CityList";
import CountryList from "./components/countrylist/CountryList";
import City from "./components/city/City";
import FormComponent from "./components/form/FormComponent";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<FormComponent />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
