import React from 'react';
import HeaderContainer from './header/header_container';
import BannerContainer from './banner/banner_container';

export default ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <BannerContainer />
      { children }
    </div>
  );
};
