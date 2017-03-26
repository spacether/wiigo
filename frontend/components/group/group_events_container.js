import GroupEvents from './group_events';
import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';

const mapStateToProps = ({group}, ownProps) => ({
  group,
  dashName: ownProps.params.dashName
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
)(GroupEvents);
