import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 75px;
  left: 0;
  top: 0;
  background: #0B0C0B;

  .header-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    height: 100%;

    .links-container {
      display: flex;
      align-items: center;
    }
  }
`;

export default Header;
