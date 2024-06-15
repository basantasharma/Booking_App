import { createContext, useContext, useState } from "react";




//stateContext is created by using createContext fn for globally accessable

const stateContext = createContext ({ 
      user:null,
      token:null,
      setUser:()=>{},
      setToken:()=>{}

                 
}) ;//why this two becz we cant put any identical data

export const ContextProvider = ({childern})=>{
    const [user,setUser]= useState({});  //store user detail
    // const [token,_setToken]= useState(localStorage.getItem('ACCESS_TOKEN'));//fetch authetication token localStorage
    const [token,_setToken]= useState(1234);


    const setToken = (token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token)

        }
        else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    return(
        <stateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
        {childern}
        </stateContext.Provider>

    )


}
export const useStateContext = ()=>useContext(stateContext);

