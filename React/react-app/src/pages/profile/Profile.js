
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
     
     <div className="profile_container">
        <div>
            {Object.keys(profileObj.personal_details).map(attr=>{
                return(
                    <div>
                        <label>{attr+":- "}</label>
                        <span>{profileObj.personal_details[attr]}</span>
                    </div>
                )
            })}
        </div>
        <div></div>
        <div></div>
        <div></div>
     </div>
    </div>
    )
}
export default Profile