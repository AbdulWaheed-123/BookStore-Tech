import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import data from "./Api"
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Reviews from './component/Reviews';
import Services from './component/Services';
import Blog from './component/Blog';
import Books from './component/Books';
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Signup from './component/User/Account/Signup';
import Login from './component/User/Account/Login';
import Cart from './component/Cart';
import {useEffect, useState } from 'react';
import Ship from './component/Ship';
import Form from './component/admin/Form';


function App() {

  const [data,setData]=useState([])
  const fetchApi = async () => {
    var value = await fetch("http://127.0.0.1:4000/forms");
    value = await value.json();
    setData(value)
  };   
useEffect(()=>{
  fetchApi()
},[])



// const {book}=data
// state for handling the books
const [CartItem, setCartItem]=useState([])

function Local(CartItem){
  localStorage.setItem('CartItem',JSON.stringify(CartItem)) 
}
const onAdd=(data)=>{
  //assuming there are some items already in cart
  const exist = CartItem.find((x)=>x.id===data._id)
  if(exist){
    setCartItem(CartItem.map((x)=>x.id===data._id ? {...exist,qty:exist.qty+1}:x))
    console.log(CartItem)
   
  }
   else{
    //adding new items
    setCartItem([...CartItem,{...data,qty:1}])
    console.log(CartItem)
   
  }
  Local(CartItem)
}
const del=(data)=>{
const exist=CartItem.find((x)=>x.id===data._id)
if(exist)
if(exist.qty===1)
{console.log("Hello")

}
else{
  setCartItem(CartItem.map((x)=>x.id===data._id?{...exist,qty:exist.qty-1}:x))
  console.log(CartItem)

}
Local(CartItem)
}



const onRemove=(data)=>{
console.log(CartItem)
  const exist=CartItem.find((x)=>x.id===data.id)
  console.log(data.id)
  console.log(exist)
  if(exist.qty>=1)
  {setCartItem(CartItem.filter((x)=>x.id!==data.id))
   }
else{
  setCartItem(CartItem.map((x)=>x.id===data.id?{...exist,qty:exist.qty-1}:x))
 
}
Local(CartItem)
}

useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem("CartItem"));
  if (savedCart) {
    setCartItem(savedCart);
  }
},[]);

  return (
    <div className="App">
 
<ToastContainer/>
<Router>

<Navbar CartItem={CartItem.length}/> 
<Routes>
<Route path="/" element={<Header/>} />
<Route path="/admin" element={<Form/>} />
<Route path="/about" element={<About/>} />
<Route path="/books" element={<Books  data={data} onAdd={onAdd}/>} />
<Route path="/cart" element={<Cart CartItem={CartItem} del={del}  onAdd={onAdd} onRemove={onRemove} />} />
<Route path="/services" element={<Services/>} />
<Route path="/reviews" element={<Reviews/>} />
<Route path="/blog" element={<Blog/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<Login/>} />
<Route path="/ship" element={<Ship/>} />
</Routes>

<Footer/>
</Router> 

   
    </div>
  );
}

export default App;
