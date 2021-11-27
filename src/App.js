import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from "./pages/About";
import VisitAssetLibrary from "./pages/VisitLibrary";
import Home from "./Home";
import AssetDetails from "./pages/AssetDetails";
import AddAsset from "./pages/AddAsset";
import UpdateAsset from "./pages/UpdateAsset";
import AssetDelete from "./pages/DeleteAsset";
import UserRegistration from "./pages/UserRegistration";
import Login from "./pages/Login";
import '../src/styles/headers.css'

function App() {
  return (
    <>
      <Header/>
      <Footer/>
    </>
  );
}

function Header(){
  return(
    <>
    <Router>
      <div className="header">
      <a  class="logo">Asset Management</a>
        <div className="header-right"  >
          <Link className="a" className="active" to="/">Home</Link>
          <Link className="a" to="/visit">See Assets</Link>
          {localStorage.getItem('mytoken') &&
          <Link className="a" to="/addasset">Add Asset</Link>}
        <Link className="a" to="/about">About</Link>
        <Link className="a" to="/registration">Registration</Link>
        {/* <Link className="a" to="/login">Login</Link> */}
        {!localStorage.getItem('mytoken') && 
        < Link className="a" to="/login">Login</Link>
        }
        {localStorage.getItem('mytoken') && <Link className="a" onClick={()=>window.location ='/login'} to="/login">Logout</Link>}
        
        </div>

      </div>
        <Routes>
        <Route path ="/" element={<Home/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path ="/visit" element={<VisitAssetLibrary/>}/>
            <Route path ="/addasset" element={<AddAsset/>}/>
            <Route path ="/book/:id" element={<AssetDetails/>}/>
            <Route path ="/bookedit/:id" element={<UpdateAsset/>}/>
            <Route path ="/registration" element={<UserRegistration/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/bookdelete/:id" element={<AssetDelete/>}/>
        </Routes>
        </Router>

      
    </>
  )
}

function Footer(){
  return(
      <>
          <p className="centerfooter">Copyright 2021 - Kiran</p>
      </>
  )
}

export default App;
