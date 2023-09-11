import './App.css';
import Collection from './Collection/Collection';
import FavourateProduct from './FavourateProduct/FavourateProduct';
import Navbar from './Navigation/Nav.js';
import NewArival from './NewArival/NewArival';
import ProductBanner from './ProductBanner/ProductBanner';
import Products from './Products/Products.js';
import Reviews from './Reviews/Reviews.js';
import Sidebar from './Sidebar/Sidebar';
import Footer from './footer/footer';

function App() {
  return (
    <>
    
      <Navbar />
      <ProductBanner />
      <Sidebar />
      <Products />
      <FavourateProduct />
      <NewArival />
      <Collection />
      <Reviews />
      <Footer/>
    </>
  );
}

export default App;
