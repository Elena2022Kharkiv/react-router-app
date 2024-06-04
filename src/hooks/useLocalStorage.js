import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  //  console.log(key, initialValue);

    const [ dataLocalStorage, setDataLocalStorage ] = useState(() => {
      // const data = localStorage.getItem('cart');
      const data = localStorage.getItem(key);
      console.log(data);
  
      return (data) ? JSON.parse(data) : initialValue;
      // if (data) {
      //   return JSON.parse(data);
      // } else return []; 
    });
    
    console.log(dataLocalStorage);
  
      useEffect(() => {
          localStorage.setItem(key, JSON.stringify(dataLocalStorage));
          // localStorage.setItem('cart', JSON.stringify(dataLocStorage));
      }, [key, dataLocalStorage]);
  
    return [ dataLocalStorage, setDataLocalStorage ] ;
  }
  