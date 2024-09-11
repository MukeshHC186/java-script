import { MdPhotoLibrary } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";

import './main-contant.scss'



const Midsection = ()=>{
    return (
        <div className="mid_div">
            <div className="input">
                <img src="https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99" alt="kkk" />
                <input type="search" placeholder="What's Your On Mind. Manish ?"/>
            </div>
            
            <div className="linetext">
                <div className="photo">
                <MdPhotoLibrary className="photo_lib"/>
                <p>Photo/Video</p>
                </div>

                <div className="tag">
                <FaUserTag className="photo_lib1"/>
                <p>Tag Friends</p>

                </div>

                <div className="feeling">
                <MdLocalActivity className="photo_lib2"/>
                <p>Feeling/Activity</p>

                </div>


            </div>

        </div>

    
        
    )
}


export default Midsection;