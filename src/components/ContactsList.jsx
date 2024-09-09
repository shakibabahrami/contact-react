import React from "react";
import Styles from "./ContactsList.module.css";
import ContactItem from "./ContactItem";

function ContactsList({ contacts, setContacts }) {
  console.log(contacts);

  const mockData = [
    {
      id: "1",
      name: "shakiba",
      lastName: "bahrami",
      email: "shakibabahrami@gmail.com",
      phone: "09333490958",
    },
    {
      id: "2",
      name: "sara",
      lastName: "ahmadi",
      email: "saraahmadifarin@gmail.com",
      phone: "09331254569",
    },
    {
      id: "3",
      name: "maryam",
      lastName: "rezaei",
      email: "maryamrezaei@gmail.com",
      phone: "09358625520",
    },
  ];
  return (
    <div className={Styles.container}>
      <h3>Contacts List</h3>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            data={contact}
            contacts={contacts}
            setContacts={setContacts}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
