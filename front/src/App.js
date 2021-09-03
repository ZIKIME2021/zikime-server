import React, { Component} from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WatchPage from './pages/WatchPage';
import HomePage from './pages/HomePage';
import styled from 'styled-components';
import { borderColor, headerHeight, containerMaxWidth, primaryColor, titleSize, imgWidth, imgHeight } from './lib/styles/theme';
import userAvatar from './images/avatar.png';

const AppWrapper = styled.div `
`;

const Container = styled.div `
    max-width: ${containerMaxWidth}px; 
    margin: 0 auto;
`
// 나중에 100vw로 바꾸기

const PageTitle = styled.h1`
    font-size: 30px;
    color: blue;
`;

const Header = styled.div`
    height: ${headerHeight}px;
    border-bottom: 1px solid ${borderColor};
`
const Main = styled.div`
    padding: 20px 0;
`
const Footer = styled.div`
    border-top: 1px solid ${borderColor};
`
const Copyright = styled.p`
    font-size: 12px;
    text-align: center;
    padding: 5px;
`;

const HeaderTitle = styled.div`
    font-size: ${titleSize}px;
    font-weight: bold;
    line-height: ${headerHeight}px;
    flex-grow: 1;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    color: ${primaryColor};
`;
const HeaderUserMenu = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    margin: 0 5px;
`;
const HeaderWapper = styled.div`
    display: flex;
`;
const HeaderUserAvatar = styled.img`
    border-radius: 50%;
    width: ${imgWidth}px;
    height: ${imgHeight}px;
`;




class App extends Component {

  

  render() {
    return (
      <AppWrapper>
                <Header>
                    <HeaderWapper>
                        <HeaderTitle>ZIKIME</HeaderTitle>
                        <HeaderUserMenu>
                            <HeaderUserAvatar alt="" src={userAvatar}></HeaderUserAvatar>
                        </HeaderUserMenu>
                    </HeaderWapper>
                </Header>
                <Main>
                    <Container>
                            {/* <Route component={HomePage} path="/"/> */}
                            <Route component={WatchPage} path="/watch" />
                            <Route component={LoginPage} path="/login" />
                            <Route component={RegisterPage} path="/register" />
                    </Container>
                </Main>
                <Footer>
                    <Container>
                        <Copyright>2021 ZIKIME developed by KOSS</Copyright>
                    </Container>
                </Footer>
            </AppWrapper>
    );
  }
}

export default App;