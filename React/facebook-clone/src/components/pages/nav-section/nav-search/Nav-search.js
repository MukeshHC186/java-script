import { IoSearchSharp } from "react-icons/io5";
import './Nav-search.scss'
const NavSearch=()=>{
    return(
        <div className="nav_search">
        <img src='https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png' alt='fb_logo'/>
          <div className="search_logo"> <IoSearchSharp  className="logo"/><input type="text" placeholder="Search Facebook " className="input_search" /></div>
          </div>
    )
}
export default NavSearch