import MainContact from "./MainContact";
import Midsection from "./MainLeftMid";
import MainContain from "./MainLeftPost";
import MainStory from "./MainLeftStory";

function MainLeft() {
    return (
        <>
      <div className="main_lift">
        <MainStory/>
        <Midsection/>
        <MainContain/>
      </div>
      <div className="main_right">
        <MainContact/>
      </div>
      </>
    );
  }
  export default MainLeft;