import React from 'react';
import { Link } from 'react-router';

class Banner extends React.Component {

  componentDidMount(){
    console.log("firing topics fetch");
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
            <Link to={`/${dashName}`} className="button bsmall">Home</Link>
            <Link to={`/${dashName}/members`} className="button bsmall">
              Members
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

  bigBanner(topic, bannerUrl){
    let content = (
      <div>
        <h1>Where will Wiigo today?</h1>
        <h2>Do more of what you love</h2>
        <Link to="/signup" className='button signup'>Sign Up</Link>
      </div>
    );
    let classVal = 'bigbanner fullwide ctr';
    if (topic) {
      classVal = 'bigbanner fullwide';
      content = (
        <div>
          <h1>{topic.title}</h1>
          <h2>{topic.description}</h2>
        </div>
      );
    }

    return (
      <section className={classVal}
        style={{
          backgroundImage: "url('"+ imagePrefix + bannerUrl+"')",
          backgroundSize: 'cover'
        }}>
        {content}
      </section>
    );
  }

  render(){
    // modes are:
    // group (when at group or event, with or without login)
    // logged in red banner
    // landing (big banner)
    // seach with a topic (big banner, not logged in, uses topic)
    // let isGroup = false
    // let pathPieces = props.path.split("/");
    // if pathPieces.length
    // console.log(props.params);
    let {dashName} = this.props.params;
    let imageUrl;
    if (dashName) {
      // group (when at group or event, with or without login) NO IMG
      let groupName;
      if (this.props.event) {
        groupName = this.props.event.group.name;
      } else if (this.props.group) {
        groupName = this.props.group.name;
      }
      return this.groupBanner(groupName, dashName);

    } else if (this.props.user && !dashName) {
      // logged in red banner
      return this.redBanner();

    } else if (this.props.params.memberId) {
      // no banner
      return null;

    } else {
      // seach with a topic (BIG BANNER, not logged in, uses topic)
      // imageUrl = 'v1490136536/banner2_cqw5oo.jpg'; //dancing
      // imageUrl = 'v1490136286/banner1_rdrv2t.jpg'; //bubbles big bright

       //bubbles cropped dark
      let bannerUrl = 'v1490140132/banner1_croped_darkened_gavqfh.jpg';
      let topic;
      let {dashTopic} = this.props.params;
      console.log(dashTopic);
      let {topics} = this.props;
      console.log(topics);
      if (dashTopic) {
        console.log();
        topic = topics.find(item => (item.dashTopic === dashTopic));
      }
      console.log(topic);
      return this.bigBanner(topic, bannerUrl);
    }
  }
}

export default Banner;
