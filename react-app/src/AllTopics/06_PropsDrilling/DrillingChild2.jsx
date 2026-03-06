import React from 'react'

const DrillingChild2 = ({str ,setData}) => {
  return (
    <div>
      <h1>DrillingChild2 : {str}</h1>
      <button onClick={()=> setData("Hii Parent")}>Send data</button>
    </div>
  )
}

export default DrillingChild2
