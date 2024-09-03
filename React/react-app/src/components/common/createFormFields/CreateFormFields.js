import { useState } from "react";

const CreateFormFields = ({ FormArr = {},onChangeCb, formObj=null }) => {
  
  console.log(formObj);

  return (
    <form className="form" key="form">
      {FormArr.map((ele) => {
        return ele.type === "input" ? (
          <div key={ele.Id}>
            <label>{ele.label}</label>
            <input
              name={ele.name}
              value={formObj?.[ele.name]}
              placeholder={ele.placeholder}
              required
              onChange={onChangeCb}
            />
          </div>
        ) : ele.type === "textarea" ? (
          <div key={ele.id}>
            <label>{ele.label}</label>
            <textarea
              name={ele.name}
              value={formObj?.[ele.name]}
              placeholder={ele.placeholder}
              onChange={onChangeCb}
            />
          </div>
        ) : ele.type === "select" ? (
          <div className="select_option" key={ele.name}>
            <label>{ele.label}</label>
            <select name={ele.name} placeholder={ele.placeholder} value={formObj?.[ele.name]} onChange={onChangeCb}>
              {ele.options.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
        ) : ele.type === "radio" ? (
          <div key={ele.name} className="select_gender_parent">
            <label><h4>{ele.label}</h4></label>
            {ele.radioOptions.map((item) => {
             return(
              <div className="select_gender" key={item.Id}>
                  <label>{item.label}</label>
                  <input type={ele.type} name={ele.name} onChange={onChangeCb} value={formObj?.[ele.name]}/>
                </div>
             )
            })}
          </div>
        ): ele.type === "checkbox" ? (
          <div key={ele.name} >
            <label>{ele.label}</label>
            {ele.skills.map((item)=>{
              return(
                <div>
                  <label>{item.label}</label>
                  <input type={ele.type} name={ele.name} onChange={onChangeCb} checked={formObj?.[ele.name]?.some(el => el === item
                    
                    .value)} value={item.value}/>
                </div>
              )
            })}
          </div>
        )
         : null;
      })}
     
    </form>
  );
};
export default CreateFormFields;
