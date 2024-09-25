import logo from '../assets/image/logo.jpg'
import { Link } from 'react-scroll';


function Navbar(){
  return (
      
      <div className="navbar bg-gray-900 text-white ">        
       <div className="flex-1">
           <a href="/"className="p-3 text-xl text-green-500"><img src={logo} className='w-10 h-10'/></a>
        </div>
       <div className="flex-none gap-2">

         <ul className="menu menu-horizontal px-1">
          <li>
          <details>
           <summary>Products</summary>
             <ul className="bg-base-100 rounded-t-none p-2">
                <li><a href="">bobo1</a></li>
                <li><a href="">bobo2</a></li>
                <li><a href="">bobo3</a></li>
               </ul>
          </details>
          </li>
          <li><Link to="2" smooth={true} duration={1000}>Our features</Link></li>
          <li><Link to="3" smooth={true} duration={1000}>About</Link></li>
          <li><Link to="4" smooth={true} duration={1000}>Mission</Link></li>
          <li><Link to="5w" smooth={true} duration={1000}>Contact Us</Link></li>
          </ul>
      </div>
    
</div>
 
      
    );
  };
  
  export default Navbar;