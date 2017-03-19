import GroupShow from './group_show';
import { connect } from 'react-redux';
import { fetchGroup, dashName, realName } from '../../actions/group_actions';

const mapStateToProps = ({user, group}, ownProps) => ({
  user,
  group
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let dashname = ownProps.location.pathname.slice(1);
  return {
    dashName,
    fetchGroup: () => dispatch(fetchGroup(dashname))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
