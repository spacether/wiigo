import GroupShow from './group_show';
import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';

const mapStateToProps = ({group}) => ({
  group
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let dashName = ownProps.params.dashName;
  return {
    fetchGroup: () => dispatch(fetchGroup(dashName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
