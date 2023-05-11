import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart({CartItem,del,onRemove,onAdd}) {

  const navigate=useNavigate()
    const customToastStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: '2px solid white',
        borderRadius: '5px',
      };
      const msg=()=>{
        toast.success('Item Removed Successfully', {
          position: toast.POSITION.TOP_CENTER,autoClose: 3000,
          style: customToastStyle,
        });
      }


    const Price= CartItem.reduce((a,c)=>a+(c.qty*c.price),0)
    const Shipment_Charges= 0;
    // const mydata= Price>=5000?0:Shipment_Charges;
    const total= Price;
  return (
    <div className='container mt-5'>
    <br/>
    <br/>
    <br/><br/>
        <table  className='table table-bordered'>
<tr>
    <th>Name</th>
    <th>Price</th>
    <th>Add</th>
    <th>Qty</th>
    <th>Remove</th>
    <th>Image</th>
    <th>Action</th>
</tr>
{
    CartItem.map((item)=>(
        <tr key={item._id}>
            <td class="align-middle">{item.name}</td>
            <td class="align-middle">{item.price}$</td>
            <button className='btn btn-primary mt-4' onClick={()=>onAdd(item)} >+</button>
            <td class="align-middle">{item.qty}</td>
            <button className='btn btn-danger mt-4' onClick={()=>del(item)}>-</button>
            <td><img style={{height:"75px"}} src={`http://127.0.0.1:4000/${item.image}`}/></td>
            <button onClick={()=>{onRemove(item);msg()}} className='btn btn-danger mt-4'>Delete</button>
        </tr>
    ))
}

        </table>
        <br/>
        <br/>
        <br/>
       <p> Price is {Price}$</p>
        {/* <p>Shipment charges= {mydata}</p> */}
        <p>Total charges are ={total}$</p>
      <Link to="/ship">
      <button className='btn btn-warning'>Checkout</button>

      </Link>  
    </div>
  )
}

export default Cart
