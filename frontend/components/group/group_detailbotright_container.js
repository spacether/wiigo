import GroupDetailBotRight from './group_detailbotright';
import { connect } from 'react-redux';

const mapStateToProps = ({group}, ownProps) => ({
  group
});

export default connect(
  mapStateToProps,
  null
)(GroupDetailBotRight);
