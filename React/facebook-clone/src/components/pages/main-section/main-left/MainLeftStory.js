import './main-story-cont.scss'
const storyData = [
    {
      username: "Add your story",
      userprofilepic:"https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99",
      storytype: "image",
      storyurl:"https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99",
    },
    {
      username: "MukeshKumarJat",
      userprofilepic:"https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIBGZpdSK8nIkYE1fXSNJrq8eyxqFLHTlXJMr4N2cGCWI&oe=66EBABAE&_nc_sid=5e03e0&_nc_cat=102",
      storytype: "video",
      storyurl: "https://cdn.pixabay.com/video/2024/03/31/206294_large.mp4",
    },
    {
      username: "Jitu",
      userprofilepic:"blob:https://web.whatsapp.com/0e9bd22c-eef0-4137-86df-16d6e86a8602",
      storytype: "image",
      storyurl: "https://e1.pxfuel.com/desktop-wallpaper/938/413/desktop-wallpaper-50-romantic-love-couple-with-quotes-for-whatsapp-dp-profile-pic-stylish-couple.jpg",
    },
    {
      username: "Prince",
      userprofilepic:"https://cdn4.sharechat.com/compressed_gm_40_img_808541_2a5de6d_1703412806820_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=820_sc.jpg",
      storytype: "video",
      storyurl:"https://videos.pexels.com/video-files/5896379/5896379-uhd_1440_2560_24fps.mp4",
    },
    {
      username: "OmJi",
      userprofilepic:"https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
      storytype: "image",
      storyurl:"https://cdn4.sharechat.com/img_851848_365362ae_1682882849265_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=265_sc.jpg",
    },
    {
        username: "Mahi",
        userprofilepic:"https://images.deccanherald.com/deccanherald%2F2024-03%2Fb90c47e5-cec9-4f7b-b7c4-14ac433ef089%2FMS_Dhoni_s_new_look_ahead_of_IPL__11_.jpg?rect=0%2C0%2C540%2C720",
        storytype: "image",
        storyurl:"https://images.news18.com/ibnlive/uploads/2024/07/untitled-design-2024-07-06t185226.317-2024-07-0b441cf3942f5e6fd9b1f32895302a16.jpg?impolicy=website&width=640&height=480",
      },
  ];

const MainStory=()=>{
    return (
        <div className="story-section">
        {storyData.map((ele) => {
          return ele.storytype === "image" ? (
            
            <div className="story-card" key={ele.username}>
              <img src={ele.storyurl} alt="name" className="story-img" />
              <p className="span-name">{ele.username}</p>
              <img src={ele.userprofilepic} alt="profle" className="profile-pic" />
            </div>
          ) : ele.storytype === "video" ? (
            <div className="story-card" key={ele.username}>
              <video width="120" height="180" autoPlay muted loop>
                <source src={ele.storyurl} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <p className="span-name">{ele.username}</p>
              <img src={ele.userprofilepic} alt="profle" className="profile-pic" />
            </div>
          ) : null;
        })}
      </div>
    )
}
export default MainStory;