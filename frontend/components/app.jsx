import React from 'react';
import BgContainer from './bg/bg_container';
import HeaderContainer from './header/header_container';
import BannerContainer from './banner/banner_container';
import FooterContainer from './footer/footer_container';

export default ({ children }) => {
  return (
    <BgContainer>
      <HeaderContainer />
      <BannerContainer />
      { children }
      <FooterContainer />
    </BgContainer>
  );
};
