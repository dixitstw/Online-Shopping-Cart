import React from 'react'

const DataDisplay = ({name, address}) => {

//const DataDisplay = (props) => {
    //destructuring object
    //const {name, address}= props
  return (
    <>
        <h1>Name: {name} </h1>
        <h2>Address: {address} </h2>
    </>
  )
}

export default DataDisplay