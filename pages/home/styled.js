import styled from 'styled-components';

const Home = styled.div`
  background: #151515;
  padding-left: 15%;
  padding-right: 15%;

  .sub-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 110px;

    .sub-menus {
      display: flex;
      flex-direction: row;
      align-items: center;

      .menu {
        height: 22px;
        font-family: Space Grotesk;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        margin-right: 50px;
        margin-left: 50px;
      }
    }
  }

  .main-container {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // padding-bottom: 150px;

    .board {
      margin-top: 25px;

      .board-desc {
        font-family: sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 69px;
        line-height: 73px;
        letter-spacing: -0.28px;
        color: #FFFFFF;
        max-width: 410px;
        padding-bottom: 50px;
        border-bottom: 1.2px solid #353433;
      }

      .board-items {
        margin-top: 45px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .item {
          max-width: 205px;
          margin-right: 25px;

          .header {
            font-family: sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 25px;
            color: #FFFFFF;
            margin-bottom: 15px
          }

          .content {
            font-family: Space Grotesk;
            font-size: 15px;
            line-height: 25px;
            color: #C7C7C7;
          }
        }
      }

      .board-actions {
        margin-top: 70px;
        display: flex;
        flex-direction: row;

        .action-btn {
          width: 156px;
          height: 57px;
          border-radius: 9px;
          margin-right: 18px;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            font-family: Space Grotesk;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
          }
        }

        .start-btn {
          background: #181918;
        }

        .say-btn {
          background: #E5E2DB;

          span {
            color: #0D0D0D;
          }
        }
      }
    }
  }

  .introduction-container {
    padding-top: 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .screenshot-container {
      .header {
        font-family: sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        color: #FFFFFF;
        margin-bottom: 85px;
      }
    }

    .introduction-desc {
      max-width: 538px;

      .title {
        font-family: sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        color: #FFFFFF;
        margin-bottom: 60px;
      }

      .content {
        font-family: sans-serif;
        font-size: 20px;
        line-height: 35px;
        color: #FFFFFF;
        margin-bottom: 30px;

        span {
          color: #B3F8AA;
        }
      }

      .description {
        font-family: sans-serif;
        font-size: 20px;
        line-height: 35px;
        color: #FFFFFF;
        margin-bottom: 50px;
      }

      .details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div {
          margin-right: 30px;

          .value {
            font-family: sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 70px;
            line-height: 100px;
            letter-spacing: -1px;
            color: #B3F8AA;
          }

          .name {
            font-family: sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 27px;
            color: #B3F8AA;
          }
        }
      }
    }
  }

  .technologies-container {
    margin-top: 150px;
    padding-bottom: 150px;

    .title {
      font-family: sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 35px;
      color: #FFFFFF;
      margin-bottom: 25px;
    }

    .description {
      font-family: sans-serif;
      font-size: 20px;
      line-height: 35px;
      color: #FFFFFF;
      margin-bottom: 110px;
    }

    .technologies {
      .tech-item {
        svg {
          margin-bottom: 35px;
        }
        .tech-desc {
          font-family: sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          color: #FFFFFF;
        }
      }
    }
  }
`;

export default Home;
