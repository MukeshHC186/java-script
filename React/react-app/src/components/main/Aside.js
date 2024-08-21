const sidebarData={
    header:"Welcome To Dashbord",
    contact:[
        {
            key:"dashbord",
            label:"Dashboard"
        },
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

function Aside(){
    const handleBtnClick=(obj)=>{
     console.log(obj.key)
    }
    return (
        <aside id="side_bar" >
           <h2>{sidebarData.header}</h2> 
           <div className="btn_div">
            {sidebarData.contact.map(hd=>{
                return <button id={hd.key} className="btn" onClick={()=>handleBtnClick(hd)}>{hd.label}</button>
            }) }
           </div>
        </aside>
    )
}
export default Aside 