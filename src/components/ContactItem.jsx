import React from "react";
import Styles from "./ContactsItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  contacts,
  setContacts,
}) {
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📞</span> {phone}{" "}
      </p>
      <p>
        <span>📧</span>
        {email}
      </p>
      <span className={Styles.delete} onClick={() => deleteHandler(id)}>
        🗑️
      </span>
    </li>
  );
}

export default ContactItem;
