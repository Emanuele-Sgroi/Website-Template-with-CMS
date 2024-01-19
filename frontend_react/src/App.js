import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home, ServiceDetails, NotFound } from "./pages/index";
import { Navbar, Footer } from "./components/index";
import { GlobalStateProvider } from "./context/GlobalStateContext";

function App() {
  return (
    <>
      <GlobalStateProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizio/:slug" element={<ServiceDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalStateProvider>
    </>
  );
}

export default App;
