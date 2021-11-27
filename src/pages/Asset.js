import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/display.css';

function Asset(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>
        <div class="container">
  
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"></div>
      <div class="col col-2"><h1>Asset ID: <Link to={`/book/${props.details.id}`}>{props.details.am_atype_id}</Link></h1></div>
      <div class="col col-3">
      <div className="butto">
      {localStorage.getItem('mytoken') && <div>
          <button className="edit" onClick={()=>navigate(`/bookedit/${props.details.id}`)}>Edit
          </button>
           <br/><br/> 
           <button className="delete" onClick={()=>navigate(`/bookdelete/${props.details.id}`)}>Delete
            </button>
            </div>}
            </div>
        </div>
      </li>
      </ul>

      
    </div>


            

        </>
    )
}

export default Asset;