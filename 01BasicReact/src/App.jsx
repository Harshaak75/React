import { useState } from 'react'
import Card from './components/card';
import './index.css'


function App({name = "Not Defined"}) {

  const [count , setcounter]  = useState(1); // count -> variable  setcounter -> method

  // const increase = () =>{
  //   setcounter((precount) => precount + 1) // callback
  //   setcounter((precount) => precount + 1)
  //   setcounter((precount) => precount + 1)
  //   setcounter((precount) => precount + 1)
  //   // setcounter(count+1) 
  // }

  // const decrease = () =>{
  //   if(count > 0){
  //     setcounter(count - 1);
  //   }
    
  // }


  return (
    <>
    <Card bg = "purple"/>
    </>
  )
}

export default App
