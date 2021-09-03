import React from 'react';
import palette from '../lib/styles/palette';
import styled, {css} from 'styled-components';


const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;

    cursor: pointer;

    background: ${palette.blue[1]};
    &:hover {
        background: ${palette.blue[0]};
    }

    ${props => 
        props.fullWidth &&
        css`
            margin-top: 1rem;
            padding-top: 0.35rem;
            padding-bottom: 0.35rem;
            width: 100%;
            font-size: 1rem;
        `}


`; 

const Button = props => <StyledButton {...props} />;

export default Button;