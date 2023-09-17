
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [addedCourses, setAddedCourses] = useState([]);
  const [totalHour , setTotalHour] =useState(0);
  const [remaining, setRemaining] = useState(20);
  const [price, setPrice] = useState(0);

  const handleSelectToCart = (course) =>{
    const isSelected = addedCourses.find(item => item.id === course.id);
    let count = course.creditHour;
    let price = course.price;

    if (isSelected){
      return alert("This Course Has Already Been Chosen")
    } else{
      
      addedCourses.forEach((item) =>{
        count = count + item.creditHour; 
        price = price + item.price;
      });
      setPrice(price)
      if (count >=20){
        return alert(' You Have Exceeded Your Credit Hour Limit.')
      }else{
        setTotalHour(count);
      }
      const remaining = 20 - count;
      if (remaining <=0){
        return alert("You Have Exceeded Your Credit Hour Limit.")
      }else{
        setRemaining(remaining);
      }
      
      const newAddedCourses =[...addedCourses, course];
      setAddedCourses(newAddedCourses);
    }
  
  }

  return (
    <>
     
      <Header></Header>
      <div className='lg:flex md:flex max-w-7xl mx-auto pr-2 py-2'>

      <Courses handleSelectToCart={handleSelectToCart}></Courses>
      <Cart 
      totalHour={totalHour}
      remaining={remaining}
      price={price}
      addedCourses={addedCourses}></Cart>

      </div>
      
    </>
  )
}

export default App
