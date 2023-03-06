import {createContext, useState,useEffect } from 'react'


const UserContext = createContext()

// the method that is used to pass the context files
export const UserDataProvider = ({children})=>{
    const [user,setUser] = useState([])
    const [image,setImage] =useState([])
const [isLoading,isLoadingSetter] = useState("true");
  


   useEffect(()=>{
    fetchFeedback()
    fetchCast()
    
},[])


const fetchFeedback = async ()=>{
    const response = await fetch("/movies/")
    const data = await response.json()
    
    setUser(data)
    isLoadingSetter("false")
   }
   const fetchCast = async ()=>{
    const response = await fetch("/cast/")
    const data = await response.json()
//     let imageFound = data.map((item)=>(
// item.id === 19
//     )) 

   console.log(data)
   }

   const addCast = async (newCast)=>{
    console.log(newCast)
    const response = await fetch("/add-cast/", {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body:newCast
    });

    let data = await response.json();
    console.log(data);
}




const [name,nameSetter] = useState(0);

const BseEffectTrial = (num)=>{
    nameSetter(num)
        }
    
    return <UserContext.Provider value={{user,name,BseEffectTrial,isLoading,addCast}}>
        {children}
    </UserContext.Provider>
}

export default UserContext