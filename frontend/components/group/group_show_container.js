import GroupShow from './group_show';
import { connect } from 'react-redux';
import { fetchGroup, leaveGroup, joinGroup }
  from '../../actions/group_actions';

const mapStateToProps = ({user, group}, ownProps) => ({
  user,
  group
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let urlDashname = ownProps.params.dashName;
  return {
    joinGroup: (group, user) => dispatch(joinGroup(group, user)),
    fetchGroup: () => dispatch(fetchGroup(urlDashname)),
    leaveGroup: (item) => dispatch(leaveGroup(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
