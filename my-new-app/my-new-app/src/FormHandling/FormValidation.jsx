import React, { useState } from 'react'

const FormValidation = () => {
  const [myData, setMyData] = useState({
    fname: '',
    lname: '',
  });

  const [errors, setErrors] = useState({
    fnameError: "",
    lnameError: ""
  });

  const changeData = (e) => {
    const { name, value } = e.target;
    setMyData((myData) => ({
      ...myData,
      [name]: value

    }));
    if(name==="fname"){
      setErrors(pre=>({
        ...pre,
        fnameError:value?"":"First name field is mandatory to fill"
      }))
    }

    if(name==="lname"){
      setErrors(pre=>({
        ...pre,
        lnameError:value?"":"Last name field is mandatory to fill"
      }))
    }
  };
    

    

  

  const submitForm = (e) => {
    e.preventDefault();

    let fnameError = "";
    let lnameError = "";

    if (!myData.fname) {
      fnameError = "First name field is mandatory to fill";
    }
    if (!myData.lname) {
      lnameError = "Last name field is mandatory to fill";
    }

    setErrors({
      fnameError,
      lnameError
    });

    if (!fnameError && !lnameError) {
      alert(`Welcome ${myData.fname} ${myData.lname}`);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        First Name:
        <input
          type="text"
          value={myData.fname}
          onChange={changeData}
          name="fname"
        />
        <br />
        <span>{errors.fnameError}</span>
        <br />

        Last Name:
        <input
          type="text"
          value={myData.lname}
          onChange={changeData}
          name="lname"
        />
        <br />
        <span>{errors.lnameError}</span>
        <br />

        <button type="submit">Submit Form</button>
      </form>

      <h2>First name: {myData.fname}</h2>
      <h2>Last name: {myData.lname}</h2>
    </div>
  );
};

export default FormValidation;