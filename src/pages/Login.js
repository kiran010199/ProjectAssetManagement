import {useState} from 'react';
import axios from 'axios';
// import{useParams} from "react-router-dom";
// import { useNavigate } from 'react-router';
import '../styles/forms.css';




function Login(){
    localStorage.clear();

    return(
        
        <>
        
        <MyForm />
        </>
    );
}

function MyForm(props){

    // const navigate = useNavigate();

    const[inputs,setInputs] = useState({}); 

    

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}))
    }
    
    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);
       
        axios
        .post('http://localhost:3002/login',inputs)
        .then(response => {
        //alert(response.data.user.id)
        //alert(response.data.accessToken)
        localStorage.setItem('mytoken',response.data.accessToken)
        
        window.location ='/visit'
        })
        .catch(error => {
        localStorage.clear();
        //alert("got error with no data")
        if( error.response ){
        alert(error.response.data); // => the response payload
        }
        })
        }
    return(
        <>
        <h1 className="centerfooter">User Login</h1>
        <form className="centerfooter" className="form" onSubmit={handleSubmit}>

            <div>
            <label className="element" >User ID:</label>
            <br></br>
            <input className="element" type="text" name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required/>
            </div>

             <div>
            <label className="element">Password:</label>
            <br></br>
            <input className="element" type="password" name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required/>
            </div> 

           
            <div>
                <br></br>
            <input className="centerfooter" type="submit"/>
            {/* <input className="reset" type="reset"/> */}
            </div>
        </form>
        </>
    )
}





export default Login;