
import './App.css';


import Menu from  './pages/Menu'
import LoginSignup from  './pages/LoginSignup'
import Product from  './pages/Product'

import ShopCategory from './pages/AvatarCategory'

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kids_banner from './Component/Assets/banner_kids.png'
import AddProduct from './Component/AddProduct/AddProduct';
import ListProduct from './Component/ListProduct/ListProduct';

import Option from './pages/Option'

import Home from './pages/Home';
import Error from './pages/Error';

import Messenger from './Component/Messenger/Messenger'
import EditAvatar from './Component/EditAvatar/EditAvatar';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<PrivateRoute Component={Home}/>}/>
      {/* <Route path="/mens" element={<ShopCategory banner={men_banner} category="MALE"/>}/>
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="FEMALE"/>}/> */}

      <Route path="/system" element={<ShopCategory banner={kids_banner} category="SYSTEMDEFINED"/>}/>
      <Route path="/user" element={<ShopCategory banner={kids_banner} category="USERDEFINED"/>}/>

      {/* <Route path="/avatar/:productId" element={<Product/>}/> */}
      <Route path="/avatar/:productId" element={<PrivateRoute Component={Product}/>}/>
      <Route path="/menu" element={<PrivateRoute Component={Menu}/>}/>
      <Route path="/" element={<LoginSignup/>}/>
      <Route path='/menu/addproduct' element={<PrivateRoute Component={AddProduct}/>}/>
      <Route path='/menu/listproduct'element={<ListProduct/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path='/messenger' element={<Messenger/>}/>
      <Route path='/edit-avatar/:avatarId' element={<EditAvatar/>}/>



      

      {/* <Route path="/home" element={<Home/>}/>
      <Route path="/system" element={<ShopCategory banner={kids_banner} category="SYSTEMDEFINED"/>}/>
      <Route path="/user" element={<ShopCategory banner={kids_banner} category="USERDEFINED"/>}/>
      <Route path="/avatar/:productId" element={<Product/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/" element={<LoginSignup/>}/>
      <Route path='/menu/addproduct'element={<AddProduct/>}/>
      <Route path='/menu/listproduct'element={<ListProduct/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path='/messenger' element={<Messenger/>}/>
      <Route path='/edit-avatar/:avatarId' element={<EditAvatar/>}/> */}












      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
