import { useState } from 'react'
import ButtonContext from './ButtonContext'

const ProviderContext = ({Children}) => {
 
    const [Theme,setTheme] = useState("light")
    const [Language,setLanguage] = useState("tamil")

    const toggleMode = () =>{
         
        setTheme(Theme === "light"?"dark":"light")
    }

    const toggleLan = () =>{
        setLanguage(Language === "tamil"?"english":"tamil")
    }
 

  return (
    <>
      <ButtonContext.Provider value = {{ Theme ,toggleMode ,Language,toggleLan }}> 
        {Children}
      </ButtonContext.Provider>
    </>
  );
};

export default ProviderContext
