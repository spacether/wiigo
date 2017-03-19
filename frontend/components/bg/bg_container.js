import Bg from './bg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  params: ownProps.params
});

export default withRouter(connect(
  mapStateToProps,
  null
)(Bg));
