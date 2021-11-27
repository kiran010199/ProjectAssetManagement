import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css';




function UserRegistration(){


    const[inputs,setInputs] = useState({})

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}))
    }
        function handleSubmit(event){
            event.preventDefault();
            console.log(inputs);
            //send info to server
            axios
            .post('http://localhost:3002/register',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert('Registered')
                // window.location='/stafflist'
            })
        }
    return(
        <>
        <h1 className="centerfooter">User Registration</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            <div >
            <label className="element">Enter an Email:</label>
            <br></br>
            <input className="element" type="text" name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required/>
            </div>

             <div>
            <label className="element">Enter your Password:</label>
            <br></br>
            <input className="element" type="password" name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required/>
            </div> 

            
            
            
            <div>
            <label className="element">Enter your FirstName:</label>
            <br></br>
            <input className="element" type="text" name="first_name"
            value={inputs.first_name || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Enter your LastName:</label>
            <br></br>
            <input className="element" type="text" name="last_name"
            value={inputs.last_name || ""}
            onChange={handleChange}
            required/>
            </div>


            <div>
            <label className="element">Mobile Number:</label>
            <br></br>
            <input className="element" type="number" name="phone_number"
            value={inputs.phone_number || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Age :</label>
            <br></br>
            <input className="element" type="number" name="age"
            value={inputs.age || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Gender:</label>
            <br></br>
            <input className="element" type="text" name="gender"
            value={inputs.gender || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Address:</label>
            <br></br>
            <input className="element" type="number" name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">L ID:</label>
            <br></br>
            <input className="element" type="number" name="l_id"
            value={inputs.l_id || ""}
            onChange={handleChange}
            required/>
            </div>
            

            <div>
                <br></br>
            <input className="submit" type="submit"/>
            </div>
        </form>
        </div>
        </>
    )
}





export default UserRegistration;