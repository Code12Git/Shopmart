import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import {Routes,Route} from 'react-router-dom'
import Signup from "./Components/Signup";
import Dataprovider from "./context/DataProvider";
import DetailItem from "./Components/Detail/DetailItem";
import Cart from "./Components/cart/Cart";
function App() {
  return (
    <Dataprovider>
    <div>
      
     
      <Routes>
      <Route
          path="/"
          element={
             <>
             <Header />
      <Home />
      </>
          }
        />
         <Route
          path="/login"
          element={
              <Login/>
          }
        />
        <Route
          path="/signup"
          element={
              <Signup/>
          }
        />
        <Route
          path="/product/:id"
          element={
             <><Header /> <DetailItem/></>
          }
        />
        <Route path="/cart"
      element={
      <Cart/>
      }/>
      </Routes>
      
     
    </div>
    </Dataprovider>
 
  );
}

export default App;
