import { useState ,useEffect} from "react"


//conditional rendering of counter 
function App(){
  let [CounterVisible,setCounterVisible]=useState(true);
  
  useEffect(function(){
    setInterval(function(){
      setCounterVisible((c)=>!c)
    },1000);
   
  },[]);
  
  return <div>
    {CounterVisible && <Counter></Counter>}
    </div>
}

//mounting,re-rendering,unmounting
function Counter(){
  const [count,setCount]=useState(0);

  useEffect(function(){
    let clock= setInterval(function(){
      setCount(c=>c+1)
      },1000)
     
      return function(){
        clearInterval(clock);
      }     
    },[]);//dependency array, clean-up,fetch inside useEffect

  function increaseCount(){
    setCount(count+1);
  }


  return <>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
  </>
}

export default App
