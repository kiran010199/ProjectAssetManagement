
import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/box.css'


function AssetDetails(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[asset,setStaff] = useState([])

    const{id} = useParams()

    useEffect(()=>{
        
        axios
        .get(`http://localhost:3001/asset/${id}`)
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
  <div >
      <h1 className="centerfooter">
          Asset Details </h1><br/>
          <div className="box1">
          <h3 className="color">Asset ID : {asset.am_id}</h3>
          <h3 className="color">Asset Type : {asset.am_atype_id}</h3>
          <h3 className="color">Make ID: {asset.am_make_id}</h3>
          <h3 className="color">AD ID : {asset.am_ad_id}</h3>
          <h3 className="color">Model : {asset.am_model}</h3>
          <h3 className="color">SNo : {asset.am_snumber}</h3>
          <h3 className="color">Date of Production : {asset.am_pdate}</h3>
          <h3 className="color">Warranty : {asset.am_warranty}</h3>
          <h3 className="color">From : {asset.am_from}</h3>
          <h3 className="color">To : {asset.am_to}</h3>
          <h3 className="color">My Year : {asset.am_myyear}</h3>
          </div>
          <br/><br/>
          <button className="back"  onClick={()=>navigate("/visit")}>Back to Asset List
          </button>
          
      
  </div>
  </>

  )
}



export default AssetDetails;