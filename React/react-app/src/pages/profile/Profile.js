import DisplayObj from '../../components/common/displayObj/DisplayObj'
import './Profile.css'
const profileObj={
    heading:"Profile",
    personal_details:{
         name:"Mukesh Kumar",
         gender:"Male",
         dob:"03/01/1993"
    },
    Education:{
        secondary:"vikek sen. sec. school",
        higher_Secondary:"shree k.s sen. sec school",
        graduation:"BBD college",
        post_Graduation:"BND college"
    },
    Contact:{
        phone:"1234567890",
        address:"plot no. 23, dewan-road , dewan , shahpura, jaipur ,rajasthan",
        email:"mukeshkumar@gmail.com"
    },
    intrest:["Sports","Movie","Coding"]

}
const Profile=()=>{
    return(
    <div className="profile">
        <h1>{profileObj.heading}</h1>
        <div className='profile_container'>
        <DisplayObj title="personal_details"  dataObj={profileObj.personal_details} className="cards_div"/>
        <DisplayObj title="Education"  dataObj={profileObj.Education}  className="cards_div"/>
        <DisplayObj title="Contact"  dataObj={profileObj.Contact}  className="cards_div"/>
        <div className="cards_div">
        <h2>intrest</h2>
        {profileObj.intrest.map(attr=>{
            return(
                <li>{attr}</li>
                
            )
        })}

    </div>
        </div>
        
    </div>
    )
}
export default Profile