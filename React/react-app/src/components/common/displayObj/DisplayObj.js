const DisplayObj=({dataObj={},title="",className=""})=>{
    return (
        <div className={className}>
        <h2>{title}</h2>
        {Object.keys(dataObj).map(attr=>{
            return(
                <div key={attr}>
                    <label>{attr+":- "}</label>
                    <span>{dataObj[attr]}</span>
                </div>
            )
        })}
    </div>
    )
}
export  default DisplayObj;