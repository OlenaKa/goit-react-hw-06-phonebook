import "./App.css"
import ContactForm from "./Components/ContactForm/"
import ContactList from "./Components/ContactList"
import Filter from "./Components/Filter"

const App = () => (
  <>
    <h1> Phonebook </h1>
    <ContactForm />
    <h2> Contacts </h2>
    <Filter />
    <ContactList />
  </>
)

export default App
