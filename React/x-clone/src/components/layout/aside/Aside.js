import "../aside/Aside.scss";
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
import { RiFileList2Fill } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { MdPunchClock } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { TbSpaces } from "react-icons/tb";
const asideData = [
  {
    logo: <PiXLogo className="bg-transparent" />,
    name: "",
  },
  {
    logo: <MdHomeFilled className="bg-transparent" />,
    name: "Home",
  },
  {
    logo: <CiSearch className="bg-transparent" />,
    name: "Explore",
  },
  {
    logo: <IoMdNotificationsOutline className="bg-transparent" />,
    name: "Notification",
  },
  {
    logo: <MdOutlineMail className="bg-transparent" />,
    name: "Message",
  },
  {
    logo: <VscDiffIgnored className="bg-transparent" />,
    name: "Grok",
  },
  {
    logo: <PiXLogo className="bg-transparent" />,
    name: "Premium",
  },
  {
    logo: <FaRegBookmark className="bg-transparent" />,
    name: "Bookmarks",
  },
  {
    logo: <BsFillPeopleFill className="bg-transparent" />,
    name: "Communities",
  },
  {
    logo: <MdOutlineFlashOn className="bg-transparent" />,
    name: "Verified Orgs",
  },
  {
    logo: <IoPersonOutline className="bg-transparent" />,
    name: "Profile",
  },
];
const moreData = [
  {
    logo: <RiFileList2Fill />,
    name: "Lists",
  },
  {
    logo: <FaMoneyBills />,
    name: "Monetization",
  },
  {
    logo: <LuArrowUpRightSquare />,
    name: "Ads",
  },
  {
    logo: <MdPunchClock />,
    name: "Jobs",
  },
  {
    logo: <TbSpaces />,
    name: "Create your Space",
  },
  {
    logo: <SlSettings />,
    name: "Sattings and privace",
  },
];
const Aside = () => {
  return (
    <div className="aside">
      {asideData.map((el) => {
        return (
          <div key={el.name}>
            <div className="logo_div">
              <button className="btn1">
                {el.logo}
                {el.name}
              </button>
            </div>
          </div>
        );
      })}
      <div class="logo_div1 dropup ">
        <button
          class="btn1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <CiCircleMore className="bg-transparent" />
          More
        </button>
            <ul class="dropdown-menu">
                {moreData.map(el=>{
            return(
                <li><a class="dropdown-item" href="#">{el.logo}  {el.name}</a></li>
            )})
        }
            </ul>
        
      </div>
      <button className="btn mt-1">Post</button>
      <div className="loginProfile">
        <div className="w-100% mt-5 d-flex gap-4">
          <img
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            src="https://avatars.githubusercontent.com/u/158014471?v=4"
            alt="mk"
          ></img>
          <div className="loginProfile_details">
            <b>
              MUKESH KUMAR JAT <MdOutlineVerified className="text-primary fs-5"/>
            </b>
            <p>mjatsuper@gmail.com</p>
          </div>
          <div className="mt-2">
            <b>
              <BsThreeDots />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aside;
