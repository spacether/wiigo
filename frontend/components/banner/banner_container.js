import Banner from './banner';
import { connect } from 'react-redux';

const mapStateToProps = ({user}) => ({
  user
});

export default connect(
  mapStateToProps,
  null
)(Banner);
