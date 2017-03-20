import RootContent from './root_content';
import { connect } from 'react-redux';
import { dashName } from '../../actions/group_actions';

const mapStateToProps = ({user, topics}, ownProps) => {
  return {
  user,
  topics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dashName
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContent);
