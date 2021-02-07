import React from 'react';
import Header from '../../components/Header';
import StyledHome from './styled';
import IconDivider from '../../assets/icons/icon-divider.svg';
import IconIntersect from '../../assets/icons/icon-intersect.svg';
import IconArrwoDown from '../../assets/icons/icon-arrow-down.svg';
import IconDiamond from '../../assets/icons/icon-diamond.svg';
import IconChevronDown from '../../assets/icons/icon-chevron-down.svg';
import IconFaceScreaming from '../../assets/icons/icon-face-screaming.svg';
import IconTechJavaScript from '../../assets/icons/icon-tech-javascript.svg';
import CallMe from '../../assets/images/callme-hand.svg';
import ScreenShot from '../../assets/images/screenshot.svg';
import MyAvatar from '../../assets/images/avatar.svg';
import Card from '../../assets/images/card.svg';
import { Button, Grid, Paper } from '@material-ui/core';

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <div className="sub-header">
        <MyAvatar />
        <div className="sub-menus">
          <div className="menu">About</div>
          <IconDivider />
          <div className="menu">Stack</div>
          <IconDivider />
          <div className="menu">Contact</div>
        </div>
      </div>
      <div className="main-container">
        <div className="board">
          <div className="board-desc">
            Developing nice things on the www.
          </div>
          <div className="board-items">
            <div className="item">
              <IconIntersect style={{ marginBottom: 15 }} />
              <div className="header">Co-Founder</div>
              <div className="content">Economic aspects and guidelines of various industries.</div>
            </div>
            <div className="item">
              <IconDiamond style={{ marginBottom: 15 }} />
              <div className="header">UI & UX development</div>
              <div className="content">Thoughtful user experience, solid research and beautiful code style.</div>
            </div>
            <IconArrwoDown />
          </div>
          <div className="board-actions">
            <button className="action-btn start-btn">
              <span>Get Started&nbsp;</span><IconChevronDown />
            </button>
            <button className="action-btn say-btn">
              <span>Say hello&nbsp;</span> <CallMe />
            </button>
          </div>
        </div>
        <Card style={{ marginRight: 40 }} />
      </div>
      <div className="introduction-container">
        <div className="screenshot-container">
          <div className="header">
            Introduction
          </div>
          <ScreenShot />
        </div>
        <div className="introduction-desc">
          <div className="title">
            humbly developing and managing digital products until robots take my job from me. But for now, I am living the dream..
            <IconFaceScreaming />
          </div>
          <div className="content">
            I'm a full stack developer currently working as CTO at <span>Wehance</span> with a wide collection of skills, an extensive knowledge base and more than 8 years of experience in the tech business.
          </div>
          <div className="description">
            I have worked in a number of environments from start-ups, building highly scalable applications from the ground up, transforming ideas into realities, and can easily work in different time zones. Whether you're a small startup or a huge multinational company.
          </div>
          <div className="details">
            <div>
              <div className="value">
                8+
              </div>
              <div className="name">
                years experience
              </div>
            </div>
            <div>
              <div className="value">
                30+
              </div>
              <div className="name">
                clients worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="technologies-container">
        <div className="title">
          Technology stack i’m using
        </div>
        <div className="description">
          I work closely with global clients to build awesome & complex platforms, by utilizing the best tools and techniques for speed, scalability, and performance.
        </div>
        
        <div className="technologies">
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={2}>
                <div className="tech-item">
                  <IconTechJavaScript />
                  <div className="tech-desc">Javascript</div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="tech-item">
                  <IconTechJavaScript />
                  <div className="tech-desc">Javascript</div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="tech-item">
                  <IconTechJavaScript />
                  <div className="tech-desc">Javascript</div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="tech-item">
                  <IconTechJavaScript />
                  <div className="tech-desc">Javascript</div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="tech-item">
                  <IconTechJavaScript />
                  <div className="tech-desc">Javascript</div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="tech-item">
                  <IconTechJavaScript />
                  <div className="tech-desc">Javascript</div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
