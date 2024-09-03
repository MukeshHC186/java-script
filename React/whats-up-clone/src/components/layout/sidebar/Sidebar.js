import { AiTwotoneMessage } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { SlOptionsVertical } from "react-icons/sl";
const chats={
    header:"Chats",
    chat_list:[
        {
            id:1,
            name:"Mukesh PTC",
            message:"Hello, how are you?",
            time:"10:00",
            status:"online",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/420474561_1440305299910829_7198873562190225004_n.jpg?ccb=11-4&oh=01_Q5AaIMd2ee7AfAGn23io0CIc82U-ZZ9jccMSto6XG9XbnQQ5&oe=66E2775F&_nc_sid=5e03e0&_nc_cat=110",
        },
        {
            id:2,
            name:"Jitu Yarr",
            message:"Sab Badiya",
            time:"12:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/424425449_7049128058457836_8756089193715234667_n.jpg?ccb=11-4&oh=01_Q5AaIBSpDbGSPcWtrvtkpDHrdlNjkE0ZoGsp2zXlvYxGpGO0&oe=66E2A790&_nc_sid=5e03e0&_nc_cat=101"
        },
        {
            id:3,
            name:"Mohit Ji",
            message:"Kad Chh Bhai",
            time:"06:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103"
        },
        {
            id:4,
            name:"Nemi Bhai",
            message:"Awla lo ki Ghara",
            time:"10:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/456962579_891270242882652_1717094314283036564_n.jpg?ccb=11-4&oh=01_Q5AaIKTcPm2rN2J3cuFDkCCzC3SgXKputMSS_HUUlDKhi8TH&oe=66E29287&_nc_sid=5e03e0&_nc_cat=100"
        },
        {
            id:5,
            name:"Manish Operater",
            message:"Paisa Dal De Yarr",
            time:"14:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/353200948_1400717373994591_740200217901489981_n.jpg?ccb=11-4&oh=01_Q5AaILc2tUsB4ANAXG0za6WWi2F8HFAHoBfBY5yEj9ooyV9O&oe=66E27B34&_nc_sid=5e03e0&_nc_cat=108"
        },
        {
            id:6,
            name:"Raj. Police Team",
            message:"Rahul Gandhi kar Sakte Hai Shadi",
            time:"15:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/254093966_624145731934937_8787895118348829819_n.jpg?ccb=11-4&oh=01_Q5AaILF3101tAK6stCjuengJYO0A3iQYzwpB5uGq0p3BeEXN&oe=66E289F1&_nc_sid=5e03e0&_nc_cat=100"
        },
        {
            id:7,
            name:"Future Of TCG",
            message:"Sabhi Class Me AA Jao",
            time:"12:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/76637355_2394222734150539_7447299832431227345_n.jpg?ccb=11-4&oh=01_Q5AaIF5Dpit-DmAUmAWwdWDyipCaQrx6ih9BEcte9Qerk4J5&oe=66E28BA4&_nc_sid=5e03e0&_nc_cat=106"
        },
        {
            id:8,
            name:"Suresh Chatki",
            message:"Waah Yarr",
            time:"18:05",
            status:"online",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/421708843_813617650930504_7330324857764675399_n.jpg?ccb=11-4&oh=01_Q5AaIC7pLvANXZS9Duw19KEKZEHQg8VryaxY93nH2U6wn71r&oe=66E29204&_nc_sid=5e03e0&_nc_cat=106"
        },
        {
            id:1,
            name:"Mukesh PTC",
            message:"Hello, how are you?",
            time:"10:00",
            status:"online",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/420474561_1440305299910829_7198873562190225004_n.jpg?ccb=11-4&oh=01_Q5AaIMd2ee7AfAGn23io0CIc82U-ZZ9jccMSto6XG9XbnQQ5&oe=66E2775F&_nc_sid=5e03e0&_nc_cat=110",
        },
        {
            id:2,
            name:"Jitu Yarr",
            message:"Sab Badiya",
            time:"12:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/424425449_7049128058457836_8756089193715234667_n.jpg?ccb=11-4&oh=01_Q5AaIBSpDbGSPcWtrvtkpDHrdlNjkE0ZoGsp2zXlvYxGpGO0&oe=66E2A790&_nc_sid=5e03e0&_nc_cat=101"
        },
        {
            id:3,
            name:"Mohit Ji",
            message:"Kad Chh Bhai",
            time:"06:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103"
        },
        {
            id:4,
            name:"Nemi Bhai",
            message:"Awla lo ki Ghara",
            time:"10:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/456962579_891270242882652_1717094314283036564_n.jpg?ccb=11-4&oh=01_Q5AaIKTcPm2rN2J3cuFDkCCzC3SgXKputMSS_HUUlDKhi8TH&oe=66E29287&_nc_sid=5e03e0&_nc_cat=100"
        },
        {
            id:5,
            name:"Manish Operater",
            message:"Paisa Dal De Yarr",
            time:"14:05",
            status:"offline",
            image:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/353200948_1400717373994591_740200217901489981_n.jpg?ccb=11-4&oh=01_Q5AaILc2tUsB4ANAXG0za6WWi2F8HFAHoBfBY5yEj9ooyV9O&oe=66E27B34&_nc_sid=5e03e0&_nc_cat=108"
        },
    ]
}
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_icons">
        <div>
          <SiGooglemessages id="chats" title="chats" />
          <HiOutlineStatusOnline />
          <AiTwotoneMessage />
          <MdOutlineGroups />
          <FaRegCircle />
        </div>
        <div className="bottom_img">
          <IoSettingsOutline />
          <img src="https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/420474561_1440305299910829_7198873562190225004_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaINL1xGqodK58DalS3FwbBidlw0ye52s1TASBu3SO-qOa&oe=66E2775F&_nc_sid=5e03e0&_nc_cat=110" alt="mkd"></img>
        </div>
      </div>
      <div className="sidebar_content">
        <div className="sidebar__header">
          <h2>{chats.header}</h2>
          <div>
            <LuMessageSquarePlus />
            <SlOptionsVertical />
          </div>
        </div>
        <div className="sidebsr_searchBar">
          <IoIosSearch />
          <input></input>
        </div>
        <div className="sidebsr_searchBar_down">
          <p id="all">All</p>
          <p>Unread</p>
          <p>Groups</p>
        </div>
        <div className="chat_container">
        {chats.chat_list.map((ele) => (
    <div key={ele.id} className="chat">
        <div className="chat__header">
            <img src={ele.image} alt="Chat Avatar" />
            <div className="chat_name">
                <h3>{ele.name}</h3>
                <p>{ele.message}</p>
            </div>
            <div className="time_div">{ele.time}</div>
        </div>
    </div>
))}

        </div>
      </div>

    </aside>
  );
};
export default Sidebar;
