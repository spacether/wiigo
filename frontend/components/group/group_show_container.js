import GroupShow from './group_show';
import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';

const mapStateToProps = ({group}) => ({
  group
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let urlDashname = ownProps.params.dashName;
  return {
    fetchGroup: () => dispatch(fetchGroup(urlDashname))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
