import { Link } from "react-router-dom"
import './hero.css'

export default function Nav(){
  return(
   <>
<nav className="Nav">
<li>
 <Link to="/" className='nav-link'>Home</Link> 
</li>
<li>
  <Link to="/about-me" className='nav-link'>About Me</Link> 
</li>  
</nav>
</>
  )
}