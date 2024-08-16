let obj = {
  personal: {
    name: "John",
    age: 22,
    gender: "",
    religion: "",
  },
  geological: {
    place: "NY",
    county: "NJ",
    country: "USA",
    nationality: "",
    citizenship: null,
  },
  hobbies: {
    reading: true,
    gaming: false,
    sport: "football",
  },
  image: {
    key: "photo",
    url: "https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/420474561_1440305299910829_7198873562190225004_n.jpg?ccb=11-4&oh=01_Q5AaIM847LW_OhTovjHY34gTKThWct8E-4fC-tvsSh28ecJv&oe=66CBD59F&_nc_sid=5e03e0&_nc_cat=110",
  },
};
function displayProfileData() {
  const main_arr = Object.keys(obj);
  const profile_div = document.createElement("div");
  profile_div.id = "profile";
  main_arr.forEach((ele) => {
    const value = obj[ele];
    // console.log(value);
    const sub_div = document.createElement("div");
      sub_div.id = ele;
      sub_div.className = "sub_div";
    if (!!typeof value === "object") {
      const label = document.createElement("label");
      label.textContent = key + " :";
      const span = document.createElement("span");
      span.textContent = !!value[key] ? value[key] : " -";
      sub_div.append(label,span);
    }
    profile_div.appendChild(sub_div);
    console.log(profile_div);
    replaceChildElement(profile_div);
  });
}
