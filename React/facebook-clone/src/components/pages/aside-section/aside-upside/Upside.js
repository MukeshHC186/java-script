import { FaRegUserCircle } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiMemoriesLine } from "react-icons/ri";
import './Upside.scss'
const upsideData=[
    {
        logo:<FaRegUserCircle/>,
        name:"Mukesh"
    },
    {
        logo:<MdOndemandVideo />,
        name:"Watch"
    },
    {
        logo:<FaUserFriends />,
        name:"Friends"
    },
    {
        logo:<RiMemoriesLine />,
        name:"Memories"
    },
    {
        logo:<MdOndemandVideo />,
        name:"Watch"
    },
    {
        logo:<FaUserFriends />,
        name:"Friends"
    },
    {
        logo:<RiMemoriesLine />,
        name:"Memories"
    },
    
]


function UpSide(){
    return(
        <div className="upside_div">
            {upsideData.map((ele)=>{
                return(
                    <div className="upside_child">
                        <div className="upside_logo">{ele.logo}</div>
                        <p className="upside_name">{ele.name}</p>
                    </div>
                )
            })}
            <div className="btn_div"><button className="upside_btn">See more </button><hr/></div>
            
      
       
       </div>
    )
}
export default UpSide