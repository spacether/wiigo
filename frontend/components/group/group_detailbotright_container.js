import GroupDetailBotRight from './group_detailbotright';
import { connect } from 'react-redux';

const mapStateToProps = ({group, user}, ownProps) => ({
  group,
  user
});

export default connect(
  mapStateToProps,
  null
)(GroupDetailBotRight);
