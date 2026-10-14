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
function App() {
  return (
    <>
    <Student name='Spongebob' age={30} isStudent={false}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Yismalem" age={24} isStudent={true}/>
    <Student/>
    <Header/>
    <Footer/>
    <Button />
    <Food/>
    <Card/>            
    </>
  );
}

export default App
