import {connect} from 'react-redux';
import User from './User';
import {getRequest, getUserRepos} from '../../../redux/userRedux';

const mapStateToProps = state => ({
  user: getUserRepos(state),
  request: getRequest(state),
});

export default connect(mapStateToProps)(User);
