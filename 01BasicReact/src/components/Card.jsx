import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'
// import '../index.css'
import './card.css'



function Card() {

  let [length, setlength] = useState(6);
  let [useNumber, setnumber] = useState(false);
  let [useChar, setChar] = useState(false);
  let [password, setpassword] = useState('');



  const generatepassword = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(useNumber){
      str += "123456789";
    }

    if(useChar){
      str += "@#$%^&*";
    }

    for(let i =1;i<length;i++){
      let ran = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ran);
    }

    setpassword(pass)

  },[length, useNumber, useChar])

  useEffect(() =>{
    generatepassword();
  },[length, useNumber, useChar])

const passwordref = useRef(null);

  const copy = () =>{

    window.navigator.clipboard.writeText(password);

    passwordref.current.select()
  }



  return (
    <div className="container flex justify-center w-full h-screen bg-blue-50">
      <div className='w-1/3 h-1/3 flex flex-col items-center justify-center'>
        <div className=''>
          Password Generator
        </div>
        <div className=''>
          <input type="text" ref={passwordref} readOnly value={password} placeholder='password'/>
          <button onClick={copy} className='bg-blue-300'>copy</button>
        </div>
        <input type="range" onChange={((e) =>setlength(e.target.value))} value={length} min={6} max={40} name="range" id="" />
        <label htmlFor="range">Length : {length}</label>
        <input type="checkbox" name="number" id="" defaultChecked={setnumber} onChange={()=>{
          setnumber((prev) => !prev)  // toggle
        }}/>
        <label htmlFor="number">UseNumber</label>
        <input type="checkbox" name="char" id="" defaultChecked={setChar} onChange={()=>{
          setChar((prev) => !prev) }}/>
        <label htmlFor="char">UseChar</label>
      </div>
    </div>
  )
}

export default Card