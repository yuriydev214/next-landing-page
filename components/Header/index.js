import StyledHeader from './styled';
import Logo from '../../assets/images/logo.svg';
import IconFaceScreaming from '../../assets/icons/icon-face-screaming.svg';
import IconLink from '../../assets/icons/icon-link.svg';
import IconTimes from '../../assets/icons/icon-times.svg';
import React, { useState } from 'react';

const Header = () => {
  const [headerShow, setHeaderShow] = useState(true);
  const handleHeaderShow = (status) => {
    setHeaderShow(status);
  };
  return (
    <>
      {headerShow && 
        <StyledHeader>
          <div className="header-wrapper">
            <IconFaceScreaming />
            <Logo style={{ marginLeft: '-15%' }} />
            <div className="links-container">
              <IconLink />
              <IconTimes style={{ marginLeft: 17 }} onClick={() => setHeaderShow(false)} />
            </div>
          </div>
        </StyledHeader>
      }
    </>
  )
};

export default Header;
