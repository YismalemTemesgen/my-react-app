// onChange = event handler used primarily with form elements ex. <input>, <textarea>, <select>, <radio> Triggers a function every time the value of the input changes

import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Yisme");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () =>{
        setName("Spongebob") ;
        console.log(name);
    }

  const incrementAge = () => {
      setAge (age + 1);
  }

  const toggleEmployedStatus = () =>{
    setIsEmployed(!isEmployed);
  }

  function handleQuantityChange(event){
     setQuantity(event.target.value);
  }
  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }
    return ( 
        <>
        <div>
            <p> Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
  
            <p> Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p> Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Increment Age</button>        
        </div>
        <div>
            <input value ={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value ={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
              <option valaue="">Select an option</option>
              <option valaue="Visa">Visa</option>
              <option valaue="Mastercard">Mastercard</option>
              <option valaue="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
                Pick up
            </label> <br/>
            <label >
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p> Shipping: {shipping}</p>
        </div>
        </>
         );
}
export default MyComponent