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
            <div className='Main_whathappen d-flex '>
                <div className='Main_whathappen_img '>
                  <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src='https://avatars.githubusercontent.com/u/158014471?v=4' alt='mk'></img>
                </div>
                <div className='formatting_icon_main text-primary '>
                   <input type='text' placeholder='What is happening?!'></input><br></br>
                   <span className='who_reply'><FaEarthAfrica className='text-primary'/>  Everyone can reply</span><hr style={{width:"80%",margin:"10px auto"}}></hr>
                   <div className=' d-flex justify-content-between ms-3'>
                   <div className='fs-5 d-flex justify-content-evenly gap-3'>
                    <CiImageOn />
                   <MdOutlineGifBox />
                   <MdOutlineGifBox />
                   <MdOutlineGifBox />
                   <MdOutlineGifBox />
                   <MdOutlineGifBox />
                   </div>
                   <div><button className='text-white bg-primary'>Post</button></div>
                   </div>
               </div>
            </div>
            <div className='text-center p-4 text-primary border border-0 border-primary-subtle'>Show 35 Posts</div>
            <div>
                
            </div>
        </div>
        );
}
export default Main