import {useState} from 'react'

function Counter() {

    const [count,setcount] = useState(0);

    const handleCounterP = () =>{
        setcount((c)=> c - 1)
    };

    const handleCounterN = () =>{
        setcount((c)=> c + 1)
    };

    const handleReset = () =>{
        setcount(0)
    }
  return (
    <>
      <div style={{marginLeft:'45%',marginTop:'20%'}}>
         <h2 style={{marginLeft:'1%'}}>Counter react App</h2>
         <h1 style={{color:'black',paddingLeft:'70px'}}>{count}</h1>

         <button  style={{color:'white',fontSize:'large',backgroundColor:'black',marginRight:'3%'}} onClick={handleCounterP}>Prev</button>
         <button  style={{color:'white',fontSize:'large',backgroundColor:'green',marginRight:'3%'}} onClick={handleCounterN}>Next</button>
         <button  style={{color:'white',fontSize:'large',backgroundColor:'red'}} onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default Counter
