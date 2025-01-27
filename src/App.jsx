import React from 'react'
import { useState } from 'react'

const App = () => {
  const[Count,setCount]=useState(0);
  const buttonClicked=(e)=>{
  let Value=e.target.innerHTML;  
  if(Value=='Increament'){
    setCount(Count+1)
  }else if(Value=='Decreament'){
    setCount(Count-1)
  }else{
    setCount(0)
  }
  }
  return (
    <>
    <div className="container col-lg-4 p-4 shadow rounded-3 my-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bolder text-center bg-secondary rounded-3 w-100">{Count}</h1>
      <div className="">
      <button onClick={buttonClicked} className="btn btn-success mx-2">Increament</button>
      <button onClick={buttonClicked} className="btn btn-warning mx-2">Reset</button>
      <button onClick={buttonClicked} className="btn btn-danger mx-2">Decreament</button>
      </div>
    </div>
    </>
  )
}

export default App