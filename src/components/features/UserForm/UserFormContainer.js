import {connect} from 'react-redux';
import UserForm from './UserForm';
import {fetchSearchedItem} from '../../../redux/userRedux';

const mapDispatchToProps = dispatch => ({
  loadItem: (input) => dispatch(fetchSearchedItem(input)),
});

export default connect(null, mapDispatchToProps)(UserForm);
