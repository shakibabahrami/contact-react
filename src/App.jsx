import Contacts from "./components/Contacts";
import ContactsList from "./components/ContactsList";
import SidebarMenu from "./components/SidebarMenu";
import { useState } from "react";
import Styles from "./components/App.module.css";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className={Styles.container}>
      <div className={Styles.leftSideContainer}>
        <Contacts contacts={contacts} setContacts={setContacts} />
        {contacts.length ? (
          <ContactsList contacts={contacts} setContacts={setContacts} />
        ) : (
          <>
            <h3 className={Styles.header}>Contacts List</h3>
            <p className={Styles.nothingAdded}>No Contacts Added yet!</p>
          </>
        )}
      </div>
      <SidebarMenu className={Styles.sidebar} />
    </div>
  );
}

export default App;
