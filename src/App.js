import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/about.scss";
import "./styles/app.scss";
import "./styles/cart.scss";
import "./styles/cart.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/founder.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/login.scss";
import "./styles/menu.scss";
import "./styles/orderDetails.scss";
import "./styles/profile.scss";
import "./styles/shipping.scss";
import "./styles/table.scss";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/shipping" element={<Shipping />} />

        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />

        <Route path="/order/:id" element={<OrderDetails />} />




      </Routes>

      <Footer />
    </Router>
  );
}

export default App;