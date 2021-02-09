import styled from 'styled-components';

const Footer = styled.div`
  padding-top: 50px;

  .text {
    font-family: Circular Std;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 70px;
    color: #FFFFFF;
    max-width: 90%;

    span {
      font-family: Circular Std;
      font-size: 17px;
      line-height: 27px;
      color: #A1A1A1;
    }
  }

  .description {
    font-family: Circular Std;
    font-size: 17px;
    line-height: 27px;
    color: #A1A1A1;
    max-width: 460px;
    margin-top: 80px;
    padding-top: 20px;
    border-top: 2px solid #A1A1A1;
  }

  .footer-links {
    margin-top: 150px;
    padding-bottom: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
    
      .link-item {
        font-family: Circular Std;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 22px;
        color: #A9F8A7;
      }

      .link-copyright {
        font-family: Circular Std;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 22px;
        color: #FFFFFF;
      }

      .divider {
        margin-right: 75px;
        margin-left: 75px;
      }
    }
  }
`;

export default Footer;
