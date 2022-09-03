import { useState } from "react"
import './signup.css'
const Signup=(()=>{
    const [userRegistration,setUserRegistration]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    const [record,setRecords] =useState([]);
    const handleInput=(event) =>{
        const name =event.target.name;
        const value=event.target.value;
        console.log(name,value)
        setUserRegistration({...userRegistration,[name] : value})

    }
     const  handleSubmit=(event)=>{
        event.preventDefault();
        const newRecord ={...userRegistration, id:new Date().getTime.toString()}
        console.log(record);
        setRecords([...record,newRecord]);
        console.log(record);
        setUserRegistration({username:"",email:"",phone:"",password:""})

     }
    return(
        <div className="block">
        <form action="" onSubmit={handleSubmit} className="sign">
            <h1>SIGNUP FORM</h1>
            <div className="signup">
                <label htmlFor="username">Fullname-</label>
                <input type="text" name="username"  autoComplete="off" 
                value={userRegistration.username}
                onChange={handleInput}
                id="username"/>
            </div>
            <div className="signup">
                <label htmlFor="email">email-</label>
                <input type="email" autoComplete="off"
                 value={userRegistration.email}
                 onChange={handleInput}
                name="email" id="email"/>
            </div>
            <div className="signup">
                <label htmlFor="phone">phone-</label>
                <input type="text" name="phone"  autoComplete="off"
                 value={userRegistration.phone}
                 onChange={handleInput}
                id="pohan"/>
            </div>
            <div className="signup">
                <label htmlFor="password">password-</label>
                <input type="password" name="password" autoComplete="off"
                 value={userRegistration.password}
                 onChange={handleInput}
                id="password"/>
            </div>
            <div className="btn1">
            <button type="submit">Signup</button>
            </div>
        </form>
        {
            record.map((curElem)=>{
                return(
                    <div className="">
                        <p>{curElem.username}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.phone}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })
        }
        </div>
    )
})
export default Signup