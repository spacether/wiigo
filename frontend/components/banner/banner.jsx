import React from 'react';
import { Link } from 'react-router';

class Banner extends React.Component {

  componentDidMount(){
    this.props.fetchTopics();
  }

  groupBanner(groupName, dashName){
    return (
      <section className='hcenter'>
        <div className='groupbanner ctr'>
          <div>
          <h1>{groupName}</h1>
          </div>
        </div>
        <div className='groupnavholder ctr'>
          <nav>
            <Link to={`/${dashName}`} className="button bsmall">
              Home
            </Link>
            <Link to={`/${dashName}/members`} className="button bsmall lmargin">
              Members
            </Link>
            <Link to={`/${dashName}/events`} className="button bsmall lmargin">
              Calendar
            </Link>
          </nav>
          <nav></nav>
        </div>
      </section>
    );
  }

  redBanner(){
    return (
      <section className='loginbanner fullwide ctr'>
        <div>
        <h2>Come find a club</h2>
        <p>There are so many exciting options to choose from</p>
        </div>
      </section>
    );
  }

  splashBanner(bannerUrl){
    return (
      <section className='bigbanner fullwide ctr'
        style={{
          backgroundImage: "url('"+ imagePrefix + bannerUrl+"')",
          backgroundSize: 'cover'
        }}>
        <div className='ctrbannertxt'>
          <h1>Where will Wiigo today?</h1>
          <h2>Do more of what you love</h2>
          <Link onClick={() => document.getElementById("openModal").click()}
            className='button signup'>Sign Up</Link>
        </div>
      </section>
    );
  }

  topicBanner(topic){
    return (
      <section className='bigbanner fullwide'
        style={{
          backgroundImage: "url('"+ imagePrefix + topic.bannerUrl+"')",
          backgroundSize: 'cover'
        }}>
        <div className='topictxtholder'>
          <h1 className='shadow_white'>{topic.title}</h1>
          <h2 className='shadow_white'>{topic.description}</h2>
        </div>
      </section>
    );
  }

  render(){
    let {dashName} = this.props.params;
    if (dashName) {
      let groupName;
      if (this.props.event) {
        groupName = this.props.event.group.name;
      } else if (this.props.group) {
        groupName = this.props.group.name;
      }
      return this.groupBanner(groupName, dashName);


    } else if (this.props.user && !dashName) {
      return this.redBanner();


    } else if (this.props.params.memberId || this.props.location.pathname.slice(0,6) === '/login') {
      return null;


    } else {
      let {topics} = this.props;
      if (this.props.location.pathname.slice(0,6) === '/find/' && topics) {
        let {dashTopic} = this.props.params;
        if (dashTopic === undefined) dashTopic = "";
        let topic = topics.find(item => (item.dashTopic === dashTopic));
        return this.topicBanner(topic);
      } else {
        let bannerUrl = 'v1490140132/banner1_croped_darkened_gavqfh.jpg';
        return this.splashBanner(bannerUrl);
      }
    }
  }

}

export default Banner;
