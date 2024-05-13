import Header from "./components/header/Header";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ShopAll from "./pages/shop-all/ShopAll";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import { Route, Routes } from "react-router-dom";
import DetailsProduct from "./pages/details-product/DetailsProduct";
import NotFound from "./components/notFound/NotFound";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop-all" element={<ShopAll />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/product/:id" element={<DetailsProduct />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
