import { useContext,useState } from "react"
import UserContext from "../context/UserContext"
function Form() {
const [file,setFile] = useState()

const handleFileInputChange = (event) => {
  const file = event.target.files[0];
  setFile(file);
}

  const {addCast} = useContext(UserContext)
const submitHandler =(e)=>{
e.preventDefault()
const form = document.CastForm;
const newCast = new FormData()
newCast.append("name",form.name.value)
    newCast.append("role",form.role.value)
    newCast.append("about",form.about.value)
    newCast.append("image",file)
addCast(newCast)
}



  return (

    <div>
      <form name="CastForm" onSubmit={submitHandler}>
        <input type="text" name="name" id="1" />
        <input type="text" name="role" id="2" />
        <input type="text" name="about" id="3" />
        <input type="file" name="image" onChange={handleFileInputChange} id="4" />
      <input type="submit" value="save" />
        
      </form>
    </div>
  )
}

export default Form
