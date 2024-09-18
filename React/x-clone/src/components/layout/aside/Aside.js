import '../aside/Aside.scss'
import { PiXLogo } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { VscDiffIgnored } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineFlashOn } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
const asideData=[
    {
        logo:<PiXLogo />,
        name:""
    } ,
    {
        logo:<MdHomeFilled />,
        name:"Home"
    } ,
    {
        logo:<CiSearch />,
        name:"Explore"
    },
    {
        logo:<IoMdNotificationsOutline />,
        name:"Notification"
    },
    {
        logo:<MdEmail />,
        name:"Message"
    },
    {
        logo:<VscDiffIgnored />,
        name:"Grok"
    },
    {
        logo:<PiXLogo />,
        name:"Premium"
    },
    {
        logo:<FaRegBookmark />,
        name:"Bookmarks"
    },
    {
        logo:<BsFillPeopleFill />,
        name:"Communities"
    },
    {
        logo:<MdOutlineFlashOn />,
        name:"Verified Orgs"
    },
    {
        logo:<IoPersonOutline />,
        name:"Profile"
    },
    {
        logo:<CiCircleMore />,
        name:"More"
    }
]
const Aside=()=>{
    return(
        <div className="aside">
          {
            asideData.map(el=>{
                return(
                    <div key={el.name}>
                        <div className='logo_div'>{el.logo}<p>{el.name}</p></div>
                    </div>
                )
            })
        }
        </div>
        );
}
export default Aside