import React,{useState,useMemo} from "react";

function LoginForm({Login, error}) {

    const [details, setDetails] = useState({name:"",email:"",password:""})

    const [labelButton, setLabelButton] = useState("action")

    const buttonDisabled = useMemo(()=>{
        if(details.password.length >=5){
            setLabelButton("enable")
            return false
        }else{
            setLabelButton("disabled")
            return true
        }
    },[details])

    const submitHandler =e =>{
        e.preventDefault()

        Login(details)
    }


    return(
        <form onSubmit={submitHandler} >
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error" >{error}</div>): ""}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={e=> setDetails({...details, name: e.target.value})}value={details.name} /> {/* Toda vez q mudamos, estamos chamando uma função q passa pelo evento, q fica com os valores q vao ser mudados */}              
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="Email" name="Email" id="Email" onChange={e=> setDetails({...details, email: e.target.value})}value={details.email} />               
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e=> setDetails({...details, password: e.target.value})}value={details.password} />               
                </div>
                <input type="submit" value="LOGIN" disabled={buttonDisabled}/>


            </div>
        </form>
    )
}
export default LoginForm;