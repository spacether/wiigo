import React from 'react';
import HeaderContainer from './header/header_container';
import BannerContainer from './banner/banner_container';
import FooterContainer from './footer/footer_container';

export default ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <BannerContainer />
      { children }
      <FooterContainer />
    </div>
  );
};
