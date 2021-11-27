import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function AssetDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])

    const{id} = useParams()

    useEffect(()=>{
        
        axios
        .delete(`http://localhost:3001/asset/${id}`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setStaff(response.data)
            }
        )
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Asset Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/visit")}>Back to Asset List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default AssetDelete;