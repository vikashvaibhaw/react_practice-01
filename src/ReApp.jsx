import {useState,useEffect} from 'react'

export default function ReApp(){
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);

    function increaseCount(){
        setCount(c=>c+1)
        //setCount(count+1);
    }

    function decreaseCount(){
        setCount2(c=>c-1)
        //setCount(count+1);
    }

     return <div>
        <Counter count={count} count2={count2}/>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
     </div>
}

//mounting,re-rendering,unmounting
function Counter(props){
    
    useEffect(function(){
        console.log("mount");
        return function(){
            console.log("unmount");
        }
    },[])

    useEffect(function(){
        console.log("count has changed");

        return function(){
            console.log("clean-up inside second effect");
            
        }
    },[props.count,props.count2])

    return <div>
        1st_Counter {props.count} <br/>
        2nd_Counter {props.count2} <br/>
    </div>
}