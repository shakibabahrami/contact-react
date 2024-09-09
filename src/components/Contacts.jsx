import React from "react";
import { useState } from "react";
import Styles from "./Contacts.module.css";
import { v4 } from "uuid";

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastName", placeholder: "Last Name" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "number", name: "phone", placeholder: "Phone" },
];

function Contacts({ contacts, setContacts }) {
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div className={Styles.container}>
        <h3 className={Styles.header}>Add New Contact</h3>
        <div className={Styles.inputs}>
          {inputs.map((input, index) => (
            <input
              className={Styles.input}
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          ))}
          <button onClick={addHandler}>Add</button>
        </div>
      </div>
      <div className={Styles.alert}>{alert && <p>{alert}</p>}</div>
    </>
  );
}

export default Contacts;
