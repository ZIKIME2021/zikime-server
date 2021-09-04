import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InnerBox = styled.div`
    .title{
        diaplay: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }

    box-shadow: 0 0 8px rbga(0, 0, 0, 0.25);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;
`;

const Title = styled.h1`
    color: ${palette.blue[0]};

`;
const AuthTemplate = ({children}) => {
    return (    
        <AuthTemplateWrapper>
            <InnerBox>
                <div className = 'title'>
                    {/* <Link to ='/' style={{color:`${palette.blue[0]}` }}>  ZIKIME </Link> */}
                    <Link to='/'><Title>안심 지키미</Title></Link>
                </div>
                {children}
            </InnerBox>
        </AuthTemplateWrapper>
    );
}

export default AuthTemplate;