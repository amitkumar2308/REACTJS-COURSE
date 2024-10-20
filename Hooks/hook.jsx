import React,{useState} from 'react'

function Hook () {

    const [counter,Setcounter] = useState(1)
     
    const addvalue=()=>{
    
     Setcounter(counter+1)
      console.log(counter)
    }


    const removevalue=()=>{
        if(counter<=0){
            alert("negative not allowed")
        }
        else{
        Setcounter(counter-1)
        }
    }

  return (
    <div>
      <h1>Hooks Counter</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addvalue}>ADD VALUE</button>


      <h2>Remove Value</h2>
      <h2>value:{counter}</h2>
      <button onClick={removevalue}>Remove</button>
    </div>
  )
}

export default Hook
