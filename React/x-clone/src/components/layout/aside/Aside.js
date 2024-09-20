import '../aside/Aside.scss'
import { PiXLogo } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { VscDiffIgnored } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineFlashOn } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
const asideData=[
    {
        logo:<PiXLogo className='bg-transparent'/>,
        name:""
    } ,
    {
        logo:<MdHomeFilled className='bg-transparent' />,
        name:"Home"
    } ,
    {
        logo:<CiSearch className='bg-transparent'/>,
        name:"Explore"
    },
    {
        logo:<IoMdNotificationsOutline className='bg-transparent'/>,
        name:"Notification"
    },
    {
        logo:<MdOutlineMail className='bg-transparent'/>,
        name:"Message"
    },
    {
        logo:<VscDiffIgnored className='bg-transparent'/>,
        name:"Grok"
    },
    {
        logo:<PiXLogo className='bg-transparent'/>,
        name:"Premium"
    },
    {
        logo:<FaRegBookmark className='bg-transparent'/>,
        name:"Bookmarks"
    },
    {
        logo:<BsFillPeopleFill className='bg-transparent'/>,
        name:"Communities"
    },
    {
        logo:<MdOutlineFlashOn className='bg-transparent'/>,
        name:"Verified Orgs"
    },
    {
        logo:<IoPersonOutline className='bg-transparent'/>,
        name:"Profile"
    }
]
const Aside=()=>{
    return(
        <div className="aside">
          {
            asideData.map(el=>{
                return(
                    <div key={el.name}>
                        <div className='logo_div'><button className='btn1'>{el.logo}{el.name}</button></div>
                    </div>
                )
            })
        }
        <div class='logo_div1 dropup '><button class='btn1'  type="button" data-bs-toggle="dropdown" aria-expanded="false"><CiCircleMore className='bg-transparent'/>More</button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
               <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <button className='btn mt-1'>Post</button>
        <div className='loginProfile'>
            <div className='w-100% mt-5 d-flex gap-4' >
                <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src='https://avatars.githubusercontent.com/u/158014471?v=4' alt='mk'></img>
                <div className='loginProfile_details'>
                    <b>MUKESH KUMAR JAT <MdOutlineVerified /></b>
                    <p>mjatsuper@gmail.com</p>
                </div>
                <div className='mt-2'><b><BsThreeDots /></b></div>
            </div>
        </div>
        </div>
        );
}
export default Aside