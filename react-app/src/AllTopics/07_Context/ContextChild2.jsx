import { useContext } from 'react'
import {myStoreContext} from './ContextProvider';

const ContextChild2 = () => {

    // step3: consume a context using useContext hook, it accepts a context object (the value returned from React.createContext)


    let {data1, data2} = useContext(myStoreContext);
    
    
    

  return (
    <div>
      <h1>Context child2{data1} {data2}</h1>
     
    </div>
  )
}

export default ContextChild2;
