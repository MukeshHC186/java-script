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
    img: "https://avatars.githubusercontent.com/u/158014471?v=4",
    name: "Jesper's Market",
  },
  {
    img: "https://media1.thrillophilia.com/filestore/3asxtcryry3gonskm7bwlzecuhy9_shutterstock_2076618793.jpg?w=340&dpr=2",
    name: "Red Table Talk Group",
  },
  {
    img: "https://avatars.githubusercontent.com/u/158014471?v=4",
    name: "Best Hidden Hiking Trails",
  },
  {
    img: "https://avatars.githubusercontent.com/u/158014471?v=4",
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