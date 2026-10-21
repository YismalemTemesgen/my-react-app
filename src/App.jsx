// HOW TO STYLE COMPONENTS WITH CSS
//-----------------------------------
// (not including external framworks or preprocessors)

//1. EXTERNAL 
//2. MODULES
//3. INLINE

import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import UserGreeting from './UserGreeting.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
function App() {
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                {id: 2, name: "orange", calories: 45},
                {id: 3, name: "banana", calories: 105},
                {id: 4, name: "coconut", calories: 159}, 
                {id: 5, name: "pineapple", calories: 37}];
const vegetables = [{id: 6, name: "potatoes", calories: 95}, 
                {id: 7, name: "celery", calories: 45},
                {id: 8, name: "carrots", calories: 105},
                {id: 9, name: "corn", calories: 159}, 
                {id: 10, name: "broccoli", calories: 37}];
                
  return (
    <>
    <Student name='Spongebob' age={30} isStudent={false}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Yismalem" age={24} isStudent={true}/>
    <Student name="Temesgen" age={50} isStudent={true}/>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
    {vegetables.length > 0 && <List items={vegetables} category="Vegetebles"/> }
    <UserGreeting isLoggedIn={true} username="Yisma"/>
    <Counter/>
    <Student />
    <MyComponent/>
    <ProfilePicture/>
    <Header/>
    <Footer/>
    <Button />
    <Food/>
    <Card/>            
    </>
  );
}

export default App
