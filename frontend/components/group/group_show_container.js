import GroupShow from './group_show';
import { connect } from 'react-redux';
import { fetchGroup, dashName, realName, updateMembers }
  from '../../actions/group_actions';

const mapStateToProps = ({user, group}, ownProps) => ({
  user,
  group
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let urldashName = ownProps.params.dashName;
  return {
    dashName,
    fetchGroup: () => dispatch(fetchGroup(urldashName)),
    updateMembers:
      (gname, memberIds) => dispatch(updateMembers(dashName(gname),memberIds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
