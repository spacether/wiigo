import GroupForm from './group_form';
import { connect } from 'react-redux';
import { createGroup, dashName } from '../../actions/group_actions';

const mapStateToProps = ({user, errors, topics}, ownProps) => {
  return {
  user,
  errors: errors['createGroup'],
  topics: topics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGroup: (group) => dispatch(createGroup(group)),
    dashName
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);
