import Contact from "../contact/Contact";
import PropTypes from "prop-types";
import css from "./contactlist.module.css";

const ContactList = ({contacts, onDelete}) => {
   
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
      ))}
    </ul>
  );
};

ContactList.PropTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
}

export default ContactList;
