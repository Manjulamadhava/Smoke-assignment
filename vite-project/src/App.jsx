import { useState } from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const [values, setvalues] = useState({name:'',address:''})
  const handleChange=(event)=>{
    setvalues({...values,[event.target.name]:[event.target.value]})
  }
  const submitting=(event)=>{
    event.preventDefault();
    Axios.post('http://localhost:5000/register',values)
    .then(res=>console.log("Stored Data successfully"))
    .catch(err=>console.log(err))
    

  }

  return (
    <>
      <div>
        <form  onSubmit={submitting}>
        <h1>Registration</h1>
        <div className="cont" >
          <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} />
        </div> 
        <div className="cont">
          <input type="password" name="password" placeholder="Enter Your Address"  onChange={handleChange} />
        </div>
        <div>
            <button type="submit" >Submit</button>

        </div>
      
      </form >
      </div>
    </>
  )
}

export default App
