import './Navbar.css'
import { Routes} from "react-router-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
function Navbar(){
    let isLogin = false;
    return(
        <>
        
        <div class="navbar">
        <img src="girlllmmm.jpg" className='girl' alt="" srcSet="" />
        <p className='pm'>Manu</p>
        <p className='pp'>Portfolio</p>
        <p className='dash'>:)</p>
        <nav>
            <ul>
                <li><Link className="a" to="/Home"><i class="fa-solid fa-house icon"></i> Home</Link></li>
                <li><Link className="a" to="/About"><i class="fa-regular fa-user icon"></i> About</Link></li>
                <li><Link className="a" to="/Contact"> <i class="fa-regular fa-address-card icon"></i> Contact</Link></li>
                
            
                {
                isLogin ? <li className=""><Link to='/Logout'><i class="fa-solid fa-right-to-bracket icon"></i> Logout</Link></li>:<li className=""><Link to='/Login'><i class="fa-solid fa-right-to-bracket icon"></i> Login</Link></li>
            }

                
            </ul>
            
    
        </nav>
    </div>
    <Routes>
                <Route exact path='/Home' element={<Home />}></Route>
                <Route exact path='/About' element={<About isLogin={isLogin}/>}></Route>
                 <Route exact path='/Contact' element={<Contact />}></Route>
                 <Route exact path='/Login' element={<Login />}></Route>
                </Routes>

   


    <footer>
    
     <p className='lin'>______________________________
     <i class="fa-brands fa-facebook fa-l"></i>
     <i class="fa-brands fa-instagram fa-l"></i>
     <i class="fa-brands fa-linkedin fa-l"></i>
     <i class="fa-brands fa-whatsapp fa-l"></i>
     <i class="fa-brands fa-square-snapchat fa-l"></i>
     ______________________________________
     </p>
    
     <li><Link className="ab" to="/Home" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Home</Link></li>

     <li><Link className="ab" to="/About" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>About</Link></li>

    <li><Link className="ab" to="/Contact" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Contact</Link></li>



    <a href="mailto:manogna.aila36@gmail.com" className='mee'>Mail me at</a><br /><br /><br /><br />


    <p className="nec">Narasaraopet Engineering College</p>    

    </footer>
        

                
        </>
    )
}

export default Navbar