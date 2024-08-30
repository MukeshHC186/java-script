import CreateFormFields from '../../components/common/createFormFields/CreateFormFields';
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
      subType: "tel",
      label: "Mobile:- ",
      placeholder: "Enter your mobile number",
      name: "mobile",
    },
    {
      Id: "message",
      type: "textarea",
      label: "Message:- ",
      placeholder:"Enter Your Message",
      name: "message"
      
    },
  ],
};
const ContactUs = () => {
  return <div className="contact-us">
    <h1>{contactUsObj.heading}</h1>
    <CreateFormFields FormArr={contactUsObj.form} />
  </div>;
};
export default ContactUs;
