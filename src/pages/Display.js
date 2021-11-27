import '../styles/display.css'
import axios from "axios";
import {  useEffect, useState } from "react"
import Asset from './Asset';


function Display(){

    //initialize use case to empty
    const[books,setStaffs] = useState([])


    useEffect(()=>{

        axios
        .get('http://localhost:3001/asset')
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setStaffs(response.data)
            }
        )
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
      Assets</h1>
          <p>
          <div>
              {books.map(book=>
                <li key={book.id}>
                    <Asset details ={book}/>
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>

  )
}



export default Display;