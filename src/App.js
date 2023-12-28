import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Auth from './Pages/Auth/Auth';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import TermsAndConditions from './Pages/TermsAndConditions';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/Golf' element={<ShopCategory banner={men_banner} category="golf"/>}></Route>
          <Route path='/soccer' element={<ShopCategory banner={women_banner}  category="soccer"/>}></Route>
          <Route path='/american-football' element={<ShopCategory banner={kids_banner}  category="american_football"/>}></Route>
          <Route path='/cricket' element={<ShopCategory banner={men_banner}  category="cricket"/>}></Route>
          <Route path='/products' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/terms' element={<TermsAndConditions />}></Route>
          <Route path='/login' element={<Auth />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
