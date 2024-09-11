import './main-folder-cont.scss'
import { FiMoreHorizontal } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const mainContain=[
    {
        username:"Manish Yadav",
        userpic:"https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99",
        more:<FiMoreHorizontal />,
        time:"1 hrs",
        icon:<FaUserFriends />,
        postType:"image",
        line:"लड़खड़ा रहे हैं  संभल रहे हैं तजुर्बे हैं..................हो रहे हैं।",
        post:"https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/459011293_870001228046178_270215879979982060_n.jpg?ccb=11-4&oh=01_Q5AaIObxI0bk369qokp_BfZXUvGzGs2ovohnbyndhFfV-ALx&oe=66ED2CDE&_nc_sid=5e03e0&_nc_cat=103",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
    {
        username:"Kamlesh Kumar",
        userpic:"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        more:<FiMoreHorizontal />,
        time:"1 hrs",
        icon:<FaUserFriends />,
        postType:"video",
        line:"Beautiful Nature",
        post:"https://assets.mixkit.co/videos/2213/2213-720.mp4",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
    {
        username:"Akhilesh Kumar",
        userpic:"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        more:<FiMoreHorizontal />,
        time:"1 hrs",
        icon:<FaUserFriends />,
        postType:"video",
        line:"Birds flying in sky",
        post:"https://media.istockphoto.com/id/1622714704/video/winter-migratory-birds.mp4?s=mp4-640x640-is&k=20&c=jrRDz10NlAB6QOIJp98rJ-J365htT_ouGewG2YRo9yk=",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
    {
        username:"Manoj Kumar",
        userpic:"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        more:<FiMoreHorizontal />,
        time:"1 hrs",
        icon:<FaUserFriends />,
        postType:"image",
        line:"Hawa Mahal , Jaipur",
        post:"https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/524/hawa-mahal1-1684300063.webp",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
    {
        username:"Sitaram",
        userpic:"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        more:<FiMoreHorizontal />,
        time:"1 hrs",
        icon:<FaUserFriends />,
        postType:"image",
        line:"My Lovely babe's",
        post:"https://cdn.openart.ai/published/XRG9JXD1MroSuiL4n2hA/buS-EQbh_ANaf_raw.jpg",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />,
    },
    {
        username:"Suresh Kumar",
        userpic:"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        more:<FiMoreHorizontal />,
        time:"3 hrs",
        icon:<FaUserFriends />,
        postType:"image",
        post:"https://blog.yatradham.org/wp-content/uploads/2023/11/Ayodhya-Ram-Mandir.png",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
    {
        username:"Manish Kumar",
        userpic:"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        more:<FiMoreHorizontal />,
        time:"40 min",
        icon:<FaUserFriends />,
        postType:"image",
        post:"https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
    {
        username:"Kanishka ",
        userpic:"https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        more:<FiMoreHorizontal />,
        time:"2 hrs",
        icon:<FaUserFriends />,
        postType:"video",
        line:" Super Slow Motion shot of a mother and her little daughter running in the meadow at sunset. Rear-view tracking shot.",
        post:"https://media.istockphoto.com/id/497375361/video/super-mother-and-daughter-running-to-the-sun.mp4?s=mp4-640x640-is&k=20&c=7RwPyzlurnRxyriCTKqzFMqgT6XrqIHNScD9C9esT38=",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
    {
        username:"Mahaveer Prasad ",
        userpic:"https://media-bom2-3.cdn.whatsapp.net/v/t61.24694-24/440792581_483358924176381_6967703305494803500_n.jpg?ccb=11-4&oh=01_Q5AaINFNMIvoI0CFasOEiEFurLZrnTNR7C784LhBXjLw-PN4&oe=66EBBA95&_nc_sid=5e03e0&_nc_cat=110",
        more:<FiMoreHorizontal />,
        time:"15 min",
        icon:<FaUserFriends />,
        postType:"video",
        line:" A cute young couple lie together on the beach and gaze out at a beautiful sunset. Close up slow motion shot.",
        post:"https://media.istockphoto.com/id/473037733/video/couple-gaze-at-sunset.mp4?s=mp4-640x640-is&k=20&c=lYUO7jSpEUfCwNQRriJF9gHCe5Bn6iDfIbE-7cPYVmo=",
        like:<AiOutlineLike />,
        comment:<FaRegComment />,
        sent:<FaWhatsapp />,
        share:<RiShareForwardLine />
    },
]
const MainContain =()=>{
return(
    <div className="main-detail">
        {mainContain.map(el=>(
                el.postType === "image" ?(
                <div key={el.username} className="post-detail">
                    <div className="main-detail-post" >
                        <div className="post-head">
                    <img src={el.userpic} alt="post" className="userimg"/>
                    <div className="main-detail-post-info">
                       <div className="user-head"> <p>{el.username}</p> 
                        <span className="p_tag">{el.time} </span>
                        <span className="p_tag1">{el.icon}</span></div>
                 <div><h4 className="more-icon">{el.more}</h4></div>
                </div></div>
                <div className="post-img">
                    <span>{el.line}</span>
                    <img src={el.post} alt="post" />
                </div>
                <div className="like-post">
                    <p>{el.like} <span className="like-span">Like</span> </p>
                    <p> {el.comment} <span className="like-span">Comment</span></p>
                    <p> {el.sent} <span className="like-span">Send</span></p>
                    <p> {el.share} <span className="like-span">Share</span></p>
                    </div>
                </div></div>
            ):el.postType==="video" ?(
                <div key={el.username} className="post-detail">
                <div className="main-detail-post" >
                    <div className="post-head">
                <img src={el.userpic} alt="post" className="userimg"/>
                <div className="main-detail-post-info">
                   <div className="user-head"> <p>{el.username}</p> 
                    <span className="p_tag">{el.time} </span>
                    <span className="p_tag1">{el.icon}</span></div>
             <div><h4 className="more-icon">{el.more}</h4></div>
            </div></div>
            <div className="post-img">
                <span>{el.line}</span> <br/>
                <video width="653" height="" controls autoPlay muted loop>
            <source src={el.post} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
            </div>
            <div className="like-post">
                <p>{el.like} <span className="like-span">Like</span> </p>
                <p> {el.comment} <span className="like-span">Comment</span></p>
                <p> {el.sent} <span className="like-span">Send</span></p>
                <p> {el.share} <span className="like-span">Share</span></p>
                </div>
            </div></div>
            ):null
        ))}

    </div>
)
}
export default MainContain;