import '../main/Main.scss'
import { FaEarthAfrica } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
const Main=()=>{
    return(
        <div className="Main">
            <div className='Main_foryou'>
                <span>For you</span>
                <span>Following</span>
            </div>
            <div className='Main_whathappen'>
            <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src='https://avatars.githubusercontent.com/u/158014471?v=4' alt='mk'></img>
            <input type='text' placeholder='What is happening?!'></input><br></br>
            <span className='who_reply'><FaEarthAfrica className='text-primary'/>  Everyone can reply</span><hr style={{width:"80%",margin:"10px auto"}}></hr>
           <div className='formatting_icon_main'>
            <div className='formatting_icons'>
                <CiImageOn />
                <MdOutlineGifBox />

                </div>
           </div>
            </div>
        </div>
        );
}
export default Main