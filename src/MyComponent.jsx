// onChange = event handler used primarily with form elements ex. <input>, <textarea>, <select>, <radio> Triggers a function every time the value of the input changes
//updater function = A function passed as an argument to setState() usually ex. setYear(year + 1) Allow for safe updates based on the previous state used with multiple state updates and asynchronous functions Good practice to use updater functions

//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//                This component re- renders
//                This component mounts 
//                The state of a value

//   useEffect(function, [dependencies])

//1. useEffect(() => {})    // Runs after every re-render
//2. useEffect(() => {},[]) // Runs only on mount
//3. useEffect(() => {},[value]) // Runs on mount + when value changes

//USES
//#1 Event Listeners
//#2 DOM manipulation 
//#3 Subscriptions (real-time updates)
//#4 Fetching Data from an API
//#5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react';

function MyComponent(){
    const [name, setName] = useState("Yisme");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [count, setCount] = useState(0);
    const [car, setCar] = useState({year: 2026, 
                                    make: "Food",
                                    model: "Mustang"});
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
     const [carMake, setCarMake] = useState("");
     const [carModel, setCarModel] = useState("");
     const [counts, setCounts] = useState(0);
     const [colors, setColors] = useState("green");
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

  function increment(){
       setCount(c => c + 1);
       setCount(c => c + 1);
       setCount(c => c + 1);
  };
  function decrement(){
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);
  };

  function reset(){
      setCount(0);
  }

  function handleYearChange(event){
      setCar(c => ({...c, year: event.target.value}));
  }
  function handleMakeChange(event){
      setCar(c => ({...c, Make: event.target.value}));
  }
  function handleModelChange(event){
     setCar(c => ({...c, Model: event.target.value}));
  }

  function handleAddFood(){
   const newFood = document.getElementById("foodInput").value;
   document.getElementById("foodInput").value = "";
   
   setFoods([...foods, newFood]);
  }
  function handleRemoveFood(index){
    setFoods(foods.filter((_, i)=> i !== index));
  }

  function handleAddCar(){
      const newCar = {year: carYear,
                      make: carMake,
                      model: carModel};
       setCars(c => [...c, newCar]);
       setCarYear(new Date().getFullYear());
       setCarMake("");
       setCarModel("");
  }
  function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
  }
  function handleYearsChange(event){
      setCarYear(event.target.value);
  }
  function handleMakesChange(event){
      setCarMake(event.target.value);
  }
  function handleModelsChange(event){
      setCarModel(event.target.value);
  }
  useEffect(() => {
      document.title = `Count: ${counts} ${colors}` ;
  }, [counts, colors]);
  function addCounts(){
       setCounts(c => c + 1);
  }
  function substractCounts(){
       setCounts(c => c - 1);
  }
  function changeColors(){
       setColors(c => c === "green" ? "red" : "green");
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
        <div>
          <p>Count: {count}</p>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>Increment</button>
        </div>
        <div>
          <p>Your favorite car is: {car.year}{car.make}{car.model}</p>
          <input type="number" value={car.year} onChange={handleYearChange}/>
          <input type="text" value={car.make} onChange={handleMakeChange}/>
          <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
        <div>
          <h1>List os Food</h1>
          <ul>
            {foods.map((food, index) =>
            <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
          </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        
        </div>
        <div>
          <h1>List of Car Objects</h1>
          <ul>
            {cars.map((car, index) =>
               <li key={index} onClick={() => handleRemoveCar(index)}>
                  {car.year} {car.make} {car.model}
               </li>
            )}
          </ul>
          <input type="number" value={carYear} onChange={handleYearsChange}></input>
          <input type="text" value={carMake} onChange={handleMakesChange} placeholder="Enter Car Make"></input>
          <input type="text" value={carModel} onChange={handleModelsChange} placeholder="Enter Car Model"></input>
          <button onClick={handleAddCar}>Add Car</button>

        </div>
        <div>
        <p style={{color: colors}}>Counts: {counts}</p>
        <button onClick={addCounts}>Add</button>
        <button onClick={substractCounts}>Subtract</button>
        <button onClick={changeColors}>Change Color</button>
         </div>
        </>
         );
}
export default MyComponent