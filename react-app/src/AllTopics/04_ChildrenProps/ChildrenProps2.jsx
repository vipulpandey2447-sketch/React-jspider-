// rafce


import React from 'react'


const ChildrenProps2 = ({children}) => {
  return (
    <div>
     <h1>example children props2</h1>
    {children}    {/* indirect child call */}
    </div>
  )
}

export default ChildrenProps2;
