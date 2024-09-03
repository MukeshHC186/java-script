import "./App.css";
import React from "react";
const formObj = {
  heading: "COMPLEX ACADEMY",
  subheading1: "a center of education",
  subheading: "EDUCATION AND IT TRAINING ACADEMY",
  description: "Student Addmission Form",
  Student_Details: [
    {
      label: "Name  ",
      type: "input",
      subtype: "text",
      name: "name",
      placeholder: "Enter your name",
    },
    {
      label: "Father's Name  ",
      type: "input",
      subtype: "text",
      name: "fname",
      placeholder: "Enter your Father's Name",
    },
    {
      label: "Mother's Name  ",
      type: "input",
      subtype: "text",
      name: "mname",
      placeholder: "Enter your Mother's Name",
    },
    {
      label: "Date Of Bitrh",
      type: "date",
      name: "dob",
      placeholder: "Enter your dob",
    },
    {
      label: "Address  ",
      type: "input",
      subtype: "text",
      name: "address",
      placeholder: "Enter your address",
    },
    {
      label: "Course  ",
      type: "input",
      subtype: "text",
      name: "course",
    },
    {
      label: "Mobile",
      name: "mobile",
      type: "input",
      subtype: "tel",
      placeholder: "Enter Mobile No.",
    },
    {
      label: "Email",
      name: "email",
      type: "input",
      subtype: "email",
      placeholder: "Enter Email Id",
    },
    
  ],
};
function App() {
  const [form_Obj, setFormObj] = React.useState(null);
  const [tableData, setTableData] = React.useState([]);
  function handle_Change(e) {
    const { name, value } = e.target;
    setFormObj((prev) => ({ ...prev, [name]: value }));
  }

  console.log(tableData);
  function submitData() {
    if (
      !!form_Obj?.name &&
      !!form_Obj?.fname &&
      !!form_Obj?.mname &&
      !!form_Obj?.dob &&
      !!form_Obj?.address &&
      !!form_Obj?.course &&
      !!form_Obj?.mobile &&
      !!form_Obj?.email
    ) {
      setTableData((prev) => [...prev, form_Obj]);
      setFormObj(null);
    } else {
      alert("error");
    }
  }

  return (
    <>
      <div className="App">
        <div className="heading">
          <h1>{formObj.heading}</h1>
          <p>{formObj.subheading1}</p>
          <h2>{formObj.subheading}</h2>
          <h3>{formObj.description}</h3>
        </div>
        <div className="form">
          <div className="persnol_details_main">
            {formObj.Student_Details.map((item) => (
              
              <div className="persnol_details" key={item.name}>
                <div>
                  <label>{item.label + ":-"}</label>
                </div>
                <input type={item.type} name={item.name} placeholder={item.placeholder} onChange={handle_Change} value={form_Obj?.[item.name] ?? ""}/>
              </div>
              
              
              ))}
          </div>
          <div className="btn_div">
            <button className="btn_1" onClick={submitData}>
              Submit
            </button>
            &nbsp;&nbsp;
            <button
              className="btn_2"
              onClick={() => {
                setFormObj(null);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="table_div">
          <table>
            <thead>
              <tr>
                <th>
                  <td>S.No.</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Mobile</td>
                  <td>Dob</td>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((ele, index) => {
                return (
                  <tr>
                    <td>{++index}</td>
                    <td>{ele?.name}</td>
                    <td>{ele?.email}</td>
                    <td>{ele?.mobile}</td>
                    <td>{ele?.dob}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
