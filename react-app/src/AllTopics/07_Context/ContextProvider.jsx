import {createContext} from 'react';

// step1 : create a context using createContext , returns context object 

 export const myStoreContext = createContext();


const ContextProvider = ( props) => {
     
    console.log(props); //{children : <contextParent/>}


    let data1 = "hello";
    let data2 = [1,2,3];

    // step2: provide a context with  data 
  return (
    <myStoreContext.Provider value={{data1,data2}}>
         {props.children}
    </myStoreContext.Provider>
  )
}

export default ContextProvider;
