import { useState } from "react"
import './signup.css';
import { auth } from "../firebase/firebase";

const Signup=(()=>{
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    
    const handleInput=(event) =>{
        const name =event.target.name;
        const value=event.target.value;
        console.log(name,value)
        setUser({...user,[name] : value})

    }
     const  handleSubmit=async(event)=>{
        event.preventDefault();
       try {
        const result=await auth.createUserWithEmailAndPassword(user.email,user.password);
        console.log('result',result.user.email)
        
       } catch (error) {
        console.log('error',error.message)
        
       }
        setUser({username:"",email:"",phone:"",password:""})

     }
    return(
        <div className="block">
        <form action="" onSubmit={handleSubmit} className="sign">
            <h1>SIGNUP FORM</h1>
           
            <div className="signup">
                <label htmlFor="email">email-</label>
                <input type="email" autoComplete="off"
                 value={user.email}
                 onChange={handleInput}
                name="email" id="email"/>
            </div>
          
            <div className="signup">
                <label htmlFor="password">password-</label>
                <input type="password" name="password" autoComplete="off"
                 value={user.password}
                 onChange={handleInput}
                id="password"/>
            </div>
            <div className="btn1">
            <button type="submit">Signup</button>
            </div>
        </form>
      
        </div>
    )
})
export default Signup