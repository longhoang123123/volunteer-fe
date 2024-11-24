import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import Header from "./components/Header";
import History from "./components/History";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import Register from "./components/Register";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Info from "./pages/Info";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import PersonalInfoPage from "./pages/PersonalInfoPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/UserContext";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <ProfilePage />
          <Header />

          <Routes>
            {/* Regular routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/info" element={<Info />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/history" element={<History />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/personal-info" element={<PersonalInfoPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />
          </Routes>

          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
