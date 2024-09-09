import { IoMdMore } from "react-icons/io";
import './Downside.scss'
const downsideData = [
  {
    img: "https://static.wixstatic.com/media/5ac271_45c358cf1c964a78a5925ad97d95b81a~mv2_d_2048_1267_s_2.jpg/v1/fill/w_636,h_550,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5ac271_45c358cf1c964a78a5925ad97d95b81a~mv2_d_2048_1267_s_2.jpg",
    name: "Save the Pomeroy Theater",
  },
  {
    img: "https://media1.thrillophilia.com/filestore/3asxtcryry3gonskm7bwlzecuhy9_shutterstock_2076618793.jpg?w=340&dpr=2",
    name: "Weekend Trips",
  },
  {
    img: "https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/341027539_2274856666050105_2753250076837142009_n.png?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=bzr9ZXNnc0MQ7kNvgGpsuP5&_nc_ht=scontent.fjai1-3.fna&_nc_gid=AYcw6LpjWFZjDDj1sMgD0KQ&oh=00_AYA6V85PLQ8rrES5orEcA_4qMg5npvgaoaeUXZTPRAOJHQ&oe=66E047D1",
    name: "Jesper's Market",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY5RM8sfYjsBIhQdJBfk-sV4ipP5F0duysA&s",
    name: "Red Table Talk Group",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzREl0iz0xMhMQt45zfe7wKvKt3MiH4ef1MA&s",
    name: "Best Hidden Hiking Trails",
  },
  {
    img: "https://static.wixstatic.com/media/5ac271_45c358cf1c964a78a5925ad97d95b81a~mv2_d_2048_1267_s_2.jpg/v1/fill/w_636,h_550,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5ac271_45c358cf1c964a78a5925ad97d95b81a~mv2_d_2048_1267_s_2.jpg",
    name: "Save the Pomeroy Theater",
  },
 
  
];

function DownsideData() {
  return (
    <div className="downside_div">
      <div className="downside_heading">
        <h2>Shortcuts</h2>
        <IoMdMore className="more_logo" />
      </div>

      {downsideData.map((ele) => {
        return (
          <div className="downside_child">
            <img src={ele.img} className="downside_img"/>
            <p className="downside_name">{ele.name}</p>
          </div>
        );
      })}
      <div className="btn_div">
        <button className="downside_btn">See more </button>
        <hr />
      </div>
    </div>
  );
}
export default DownsideData;