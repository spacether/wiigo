import GroupMembers from './group_members';
import { connect } from 'react-redux';

const mapStateToProps = ({group}, ownProps) => ({
  group
});

export default connect(
  mapStateToProps,
  null
)(GroupMembers);
