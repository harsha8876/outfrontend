import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './features/homepage/Homepage';
import Footer from './components/footer/Footer';
import Chat from './chat/Chat';
import Chats from './chats/Chats';
import Add from './features/add/Add';
import Gig from './features/gig/Gig';
import Gigs from './features/gigs/Gigs';
import Login from './features/login/Login';
import Mygigs from './mygigs/Mygigs';
import Orders from './orders/Orders';
import Register from './register/Register';
import Pay from './features/pay/Pay';
import Success from './features/success/Success';
import Blog from './features/blog/Blog';
import Post from './features/blog/Post';
import PrivacyPolicy from './components/about/PrivacyPolicy';
import Termsofser from './components/about/Termsofser';
import Support from './components/support/Support';
import ContactUs from './components/support/ContactUs';
import SocialHub from './components/community/SocialHub';
import Faqs from './components/about/Faqs';
import Purpose from './components/about/Purpose';
import Working from './components/about/Working';
import ResetPassword from './Forgotpass/ResetPassword';
import ForgotPassword from './Forgotpass/ForgotPassword';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gig/:id" element={<Gig />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/mygigs" element={<Mygigs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pay/:id" element={<Pay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms&service" element={<Termsofser />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/social" element={<SocialHub />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/working" element={<Working />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
