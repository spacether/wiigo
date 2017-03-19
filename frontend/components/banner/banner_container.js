import Banner from './banner';
import { connect } from 'react-redux';

const mapStateToProps = ({user, group, event}) => ({
  user,
  group,
  event
});

export default connect(
  mapStateToProps,
  null
)(Banner);
