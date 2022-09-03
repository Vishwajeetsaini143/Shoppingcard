import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import './App.css';
import Card from './Component/Back/Card';
import Header from './Component/Front/Header/Header.jsx'
import Signup from './Component/Signup/Signup';
import Cart from './Component/Cart/Cart';
import { useState } from 'react';
import Single from './Component/Single/Single';

function App() {
  const [cartItems,setCartItems] =useState([]);
  const handleAddProduct=(Product)=>{
    alert('run')
    console.log('pr',Product)
   
  }



  let total=0;

  const getData=(data)=>{
    console.log('data',data)
    setCartItems([...cartItems,{...data}])

  }

  cartItems?.forEach((item)=>{
   


total=total+Math.floor(item.price);
})

console.log(total);

const handleRemove=(id)=>{
  
 
  const fillArr=cartItems.filter((item)=>item.id!==id)

  setCartItems(fillArr)
}


  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        
        <Routes>
          <Route path='/' element={<Card handleAddProduct={handleAddProduct} getData={getData} />}/>
          <Route  exact path='/signup'element={<Signup/>}/>
          <Route exact path='/cart' element={<Cart  cartItems={cartItems}   handleRemove={handleRemove} total={total} />}/>
          <Route exact path='/product/:title' element={<Single />}/>
          
         
        
        </Routes>
      </Router>
      
    </div>
    
)}

export default App;
