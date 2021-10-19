import { useState } from 'react'

export const Counter = () => {
    //hook1
    const  [age, setAge] = useState(25)
    const getOlder = () => setAge(age => age + 1)
    const reset = () => setAge(25)
    //hook2
    const [hidden, setHidden] = useState(false);
    const ShowText = () => setHidden(true)
    const HideText= () => setHidden(false)

  return (
    <div>
      {hidden ? <p> Karen is: {age} years old</p> : null}
      <button onClick={getOlder}>getOlder</button>
      <button onClick={reset}>reset</button>  
      <button onClick={ShowText}>ShowText</button>  
      <button onClick={HideText}>HideText</button> 

    </div>
  )
}
