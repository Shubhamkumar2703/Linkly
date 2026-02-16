import { Routes, Route } from "react-router-dom";
import AbouPage from "./components/AbouPage";
import LandingPage from "./components/LandingPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import ShortenUrlPage from "./components/ShortenUrlPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "./components/ErrorPage";
import ContactPage from "./components/ContactPage";

const AppRouter = () => {
  return (
    
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<AbouPage />} />
      <Route path='/register' element={<PrivateRouter publicPage={true}><RegisterPage /></PrivateRouter>} />
      <Route path='/login' element={<PrivateRouter publicPage={true}><LoginPage /></PrivateRouter>} />
      <Route path='/dashboard' element={<PrivateRouter publicPage={false}><DashboardLayout /></PrivateRouter>} />
      <Route path='/createnewurl' element={<PrivateRouter publicPage={false}><DashboardLayout /></PrivateRouter>} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path="*" element={<ErrorPage message="Page not found lol" />} />
    </Routes>
    
  );
};

export default AppRouter;

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path='/s/:url' element={<ShortenUrlPage />} />
    </Routes>
  );
};
