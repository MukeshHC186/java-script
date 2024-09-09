import './Nav-main.scss'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { MdOutlineGroups } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
const NavMain=()=>{
    return(
        <div className="nav_main">
          <ul className="nav_ul">
                <li className='icon'><AiFillHome /></li>
                <li className='icon'><MdOutlineOndemandVideo /></li>
                <li className='icon'><CiShop /></li>
                <li className='icon'><MdOutlineGroups /></li>
                <li className='icon'><SiFacebookgaming className="fb_gamming_btn" /></li>
            </ul>       
        </div>
    )
}
export default NavMain