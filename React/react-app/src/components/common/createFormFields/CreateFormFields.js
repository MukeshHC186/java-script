import { useState } from "react";

const CreateFormFields = ({FormArr={}}) => {
   const [formObj,setformObj]= useState(null)
    const _handleChange=(e)=>{
      setformObj({
        ...formObj,
        [e.target.name]:e.target.value
      })
    }
    console.log(formObj);
    
    return (
      <form className="form" key="form">
          {FormArr.map(ele=>{
              return (
                ele.type==='input'?
              <div key={ele.Id}>
                  <label>{ele.label}</label>
                  <input name={ele.name} value={formObj?.[ele.name]} placeholder={ele.placeholder}required onChange={_handleChange} />
              </div>
              :ele.type==='textarea'?
              <div key={ele.id}>
                <label>{ele.label}</label>
                <textarea name={ele.name} value={formObj?.[ele.name]} placeholder={ele.placeholder} onChange={_handleChange}/>
              </div>
              :null
              )
          })}
          <div className='btn_div1'key="submit">
          <button>Submit</button>
          </div>
      </form>
    )
  };
  export default CreateFormFields;