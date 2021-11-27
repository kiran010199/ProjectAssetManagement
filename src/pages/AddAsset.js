import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css'






function AddAsset(){

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
            .post('http://localhost:3001/asset',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                window.location='/visit'
            })
        }
    return(
        <>
        <h1 className="centerfooter">Add New Asset</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            <div>
            <label className="element">Asset ID :</label>
            <br></br>
            <input className="element" type="number" name="am_id"
            value={inputs.am_id || ""}
            onChange={handleChange}
            required/>
            </div>

            <div >
            <label className="element">Asset Type:</label>
            <br></br>
            <input className="element" type="text" name="am_atype_id"
            value={inputs.am_atype_id || ""}
            onChange={handleChange}
            required/>
            </div>
            
            
            <div>
            <label className="element">Make ID:</label>
            <br></br>
            <input className="element" type="text" name="am_make_id"
            value={inputs.am_make_id || ""}
            onChange={handleChange}
            required/>
            </div>



            <div>
            <label className="element">AD ID:</label>
            <br></br>
            <input className="element" type="text" name="am_ad_id"
            value={inputs.am_ad_id || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Model:</label>
            <br></br>
            <input className="element" type="text" name="am_model"
            value={inputs.am_model || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">SNo:</label>
            <br></br>
            <input className="element" type="text" name="am_snumber"
            value={inputs.am_snumber || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Date of Production:</label>
            <br></br>
            <input className="element" type="date"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
             name="am_pdate"
            value={inputs.am_pdate || ""}
            onChange={handleChange}/>
            </div>

            <div>
            <label className="element">Warranty:</label>
            <br></br>
            <input className="element" type="text" name="am_warranty"
            value={inputs.am_warranty || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">From:</label>
            <br></br>
            <input className="element" type="date"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
             name="am_from"
            value={inputs.am_from || ""}
            onChange={handleChange}/>
            </div>

            <div>
            <label className="element">To:</label>
            <br></br>
            <input className="element" type="date"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
             name="am_to"
            value={inputs.am_to || ""}
            onChange={handleChange}/>
            </div>

            
            <div>
            <label className="element">My Year:</label>
            <br></br>
            <input className="element" type="number" name="am_myyear"
            value={inputs.am_myyear || ""}
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





export default AddAsset;