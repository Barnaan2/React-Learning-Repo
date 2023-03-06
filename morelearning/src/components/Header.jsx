import UserContext from "../context/UserContext"
import Spinner from "./Spinner";
import { useContext,useEffect } from "react"
function Header() {
  const {user,name,BseEffectTrial,isLoading } = useContext(UserContext)
  useEffect(()=>{
  
  },[name]);
// function checker(){
//   alert("you clicked the button once i guess")
//   useEffectTrial()
// }  
if(isLoading == "true"){
  return (
    <Spinner/>
  )
}

  return (
    <div>

     {
      user.map((us)=>(
        <div key={us.id}>movie name is {us.title}
        
        {us.cast.map((item)=>(
          <p key={item.id}> thie cast name is {item.name}</p>
        ))}
        </div>
        
      ))
     }
    </div>
  )
}

export default Header
