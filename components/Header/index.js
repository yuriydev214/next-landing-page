import StyledHeader from './styled';
import Logo from '../../assets/images/logo.svg';
import IconFaceScreaming from '../../assets/icons/icon-face-screaming.svg';
import IconLink from '../../assets/icons/icon-link.svg';
import IconTimes from '../../assets/icons/icon-times.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-wrapper">
        <IconFaceScreaming />
        <Logo style={{ marginLeft: '-15%' }} />
        <div className="links-container">
          <IconLink />
          <IconTimes style={{ marginLeft: 17 }} />
        </div>
      </div>
    </StyledHeader>
  )
};

export default Header;
