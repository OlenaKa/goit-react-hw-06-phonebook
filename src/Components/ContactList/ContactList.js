import PropTypes from "prop-types"
import ContactItem from "../ContactItem"
import { connect } from "react-redux"

const ContactList = ({ contacts }) => (
  <ul>
    <ContactItem contacts={contacts} />
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase()
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  )
}

const mapStateToProps = (state) => {
  return {
    contacts: filterContacts(state.items, state.filter),
  }
}

export default connect(mapStateToProps)(ContactList)
