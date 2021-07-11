import { connect } from "react-redux"
import actions from "../../redux/actions"

const Filter = ({ value, onInput }) => (
  <>
    <h2>Find contacts by name</h2>
    <input
      type="text"
      name="filter"
      // value={value}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      onChange={onInput}
    />
  </>
)

// Filter.propTypes = {
//   onInput: PropTypes.func.isRequired,
// }
// const mapStateToProps = (state) => ({
//   value: state.filter,
// })

const mapDispatchToProps = (dispatch) => {
  return {
    onInput: (e) => dispatch(actions.filterContacts(e.target.value)),
  }
}

export default connect(null, mapDispatchToProps)(Filter)
