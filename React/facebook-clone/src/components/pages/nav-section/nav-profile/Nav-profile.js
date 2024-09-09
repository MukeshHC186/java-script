import './Nav-profile.scss'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LiaFacebookMessenger } from "react-icons/lia";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";
const NavProfile=()=>{
    return(
        <div className="nav_profile">
           <FaRegUserCircle className="user"/>
            <p>Mukesh</p>
            <IoMdAdd  className="btn" />
            <LiaFacebookMessenger className="btn" />
            <IoNotificationsCircleSharp className="btn" />
            <IoMdArrowDropdownCircle  className="btn"/>
        </div>
    )
}
export default NavProfile