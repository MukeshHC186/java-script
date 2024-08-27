import './ContactUs.css'
const contactUsObj = {
    heading:"Contact Us",
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
      subType: "mobile",
      label: "Mobile:- ",
      placeholder: "Enter your mobile number",
      name: "mobile",
    },
    {
      Id: "message",
      type: "textarea",
      label: "Message:- ",
      name: "message",
    },
  ],
};
const ContactUs = () => {
  return <div className="contact-us">
    <h1>{contactUsObj.heading}</h1>
    <form className="form">
        {contactUsObj.form.map(ele=>{
            return <div key={ele.Id}>
                <label>{ele.label}</label>
                <input type={ele.type} name={ele.name} placeholder={ele.placeholder}required />
            </div>
        })}
        <div className='btn_div1'>
        <button>Submit</button>
        </div>
    </form>
  </div>;
};
export default ContactUs;
