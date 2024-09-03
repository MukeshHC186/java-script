import { useState } from "react";
import CreateFormFields from "../../components/common/createFormFields/CreateFormFields";
import "./ContactUs.css";
const contactUsObj = {
  heading: "Contact Us",
  form: [
    {
      Id: "name",
      type: "input",
      subType: "text",
      label: "Name:- ",
      placeholder: "Enter your name",
      name: "name",
    },

    {
      Id: "email",
      type: "input",
      subType: "email",
      label: "Email:- ",
      placeholder: "Enter your email",
      name: "email",
    },

    {
      Id: "mobile",
      type: "input",
      subType: "tel",
      label: "Mobile:- ",
      placeholder: "Enter your mobile number",
      name: "mobile",
    },
    {
      Id: "message",
      type: "textarea",
      label: "Message:- ",
      placeholder: "Enter Your Message",
      name: "message",
    },
    {
      Id: "city",
      label: "city",
      name: "city",
      type: "select",
      placeholder: "Enter city",
      options: [
        { value: "Select", label: "Select" },
        { label: "Delhi", value: "Delhi" },
        { label: "Mumbai", value: "Mumbai" },
        { label: "Kolkata", value: "Kolkata" },
        { label: "Bangalore", value: "Bangalore" },
        { label: "Chennai", value: "Chennai" },
      ],
    },
    {
      id: "gender",
      label: "Gender",
      type: "radio",
      placeholder: "Enter your gender",
      subtype: "radio",
      name: "gender",
      radioOptions: [
        {
          id: "male",
          label: "Male",
          name: "male",
          value: "male",
        },
        {
          id: "female",
          label: "Female",
          name: "female",
          value: "female",
        },
        {
          id: "Transgender",
          label: "Transgender",
          name: "Transgender",
          value: "Transgender",
        },
      ],
    },
    {
      id: "skills",
      label: "Skills",
      type: "checkbox",
      name: "skills",
      skills: [
        {
          label: "java",
          value: "java",
        },
        {
          label: "html",
          value: "html",
        },
        {
          label: "css",
          value: "css",
        },
      ],
    },
  ],
};
const ContactUs = () => {
  const [formObj, setformObj] = useState(null);
  const _handleChange = (e) => {
    let { name, value } = e.target;
    let val = value;
    if (e.target.name === "skills") {
      val = formObj?.skills ?? [];
      let isExists = val?.some((el) => el === value);
      if (isExists) {
        val = val?.filter((el) => el !== value);
      } else {
        val.push(value);
      }
    }
    setformObj({
      ...formObj,
      [name]: val,
    });
  };

  console.log(formObj);
  return (
    <div className="contact-us">
      <h1>{contactUsObj.heading}</h1>
      <CreateFormFields FormArr={contactUsObj.form} onChangeCb={_handleChange} formObj={formObj} />
      <div className="btn_div1" key="submit">
        <button>Submit</button>
        <button onClick={()=>setformObj(null)}>Reset</button>
      </div>
    </div>
  );
};
export default ContactUs;
