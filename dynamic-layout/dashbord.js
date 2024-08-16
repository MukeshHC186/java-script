const sidebarData1={
    header:"Dashboard Data",
    contact:[
        {
            key:"profile",
            label:"Profile"
        },
        {
            key:"about",
            label:"About"
        },
        {
            key:"contact",
            label:"Contact"
        },
        {
            key:"help",
            label:"Help"
        }
    ]
}
function displayDashbordData(){
    const dasbord=document.createElement("div")
    const h1=document.createElement("h1")
    h1.textContent=sidebarData1.header
    dasbord.append(h1)
    sidebarData1.contact.forEach(ele=>{
        const div=document.createElement("div")
        div.id=ele.key
        div.className="dash_btn_div"
        const button=document.createElement("button")
        button.textContent=ele.label
        button.className="dashbord_page_btn"
        button.addEventListener("click",()=>handelsidebarBtnClick(btn.key))
        div.appendChild(button)
        dasbord.appendChild(div)
        replaceChildElement(dasbord)
    })
    // console.log("dashbord");
}