import StyledFooter from './styled';
import MyAvatar from '../../assets/images/avatar.svg';
import IconPhone from '../../assets/icons/icon-phone.svg';
import IconDivider from '../../assets/icons/icon-divider.svg';

const Header = () => {
  return (
    <StyledFooter>
      <div className="text">
        innovation doesn't come just from giving people incentives; it comes from creating environments where their ideas can connect.
        <span>
          - Steven Johnson
        </span>
      </div>
      <div className="description">
        I’m always happy to talk about working together, new opportunities or just catching up. If you’d like to get in touch, just shoot me an email with the link below.
      </div>
      <div className="footer-links">
        <MyAvatar style={{ marginRight: 120 }} />
        <div className="links">
          <div className="link-item">hello@kasd.de</div>
          <IconDivider className="divider" />
          <div className="link-item"><IconPhone /> + 49 1 303 841 39</div>
          <IconDivider className="divider" />
          <div className="link-copyright">®2021 design & development by myself </div>
        </div>
      </div>
    </StyledFooter>
  )
};

export default Header;
