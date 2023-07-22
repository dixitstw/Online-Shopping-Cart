import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { GlobalContext } from './GlobalContext'

const Counter = () => {

    const value= useContext(GlobalContext)
    /*usestate- One of the important react hooks for managing state
    syntax:
    let[state variable, function] =useState(initial data)

    -state variable-name of the state variable
    -function- funciton to update state variable
    -useState- to create a useState variable
    -initial data- starting data
    0-9: numbers
    '' : strings
    []: array
    {}: object

    useEffect(function dependency)
    function-> side effects to be seen
    dependency-> array of states which trigger the function
    []-> triggers only at the page load
    [var1, var2]- triggers when var1 and var2 changes
    numm-> changes everytime when any variable changes
    */
    let [counter, setCounter]= useState(5)
    let [data, setData] = useState(500)

    const increase =() => {
        setCounter(++counter)
        //console.log(counter)
    }

    useEffect(()=>{
        window.alert("value updated")
    }, [counter, data])
    return (
        <>
        Name: {value.name}
        <br/>
        Address: {value.address}
        <div style={{justifyContent: 'center', fontSize: '32px', height: '100vh', verticalAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
     Counter: {counter}
<br/>
        <button onClick={increase}>Increase Count</button>
        <button onClick={()=>{
            setCounter(--counter)
        }}>Decrease Count</button>

<button onClick={()=>{
            setCounter(5)
        }}>Reset Count</button>

        <br/>
        Data: {data}
        <button onClick={()=>setData(data+50)}>Increase Count</button>
        <button onClick={()=>setData(data-50)}>Decrease Count</button>
        <button onClick={()=>setData(500)}>Reset Count</button>



        </div>

    </>
      );
}

export default Counter