import GroupCreate from './group_create';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import { fetchTopics } from '../../util/topic_api';

const mapStateToProps = ({user, errors, topics}, ownProps) => {
  return {
  user,
  errors: errors['createGroup'],
  topics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGroup: (group) => dispatch(createGroup(group))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreate);
