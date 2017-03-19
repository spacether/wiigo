import Banner from './banner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = ({user, group, event}, ownProps) => ({
  params: ownProps.params,
  user,
  group,
  event
});

export default withRouter(connect(
  mapStateToProps,
  null
)(Banner));
