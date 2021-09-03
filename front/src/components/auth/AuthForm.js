import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthFormWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    textAlign: center;
    h1{
        margin: 0;
        color: ${palette.black[0]};
        margin-bottom: 1rem;
    }
`;

const FormInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.black[0]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.black[1]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const FormFooter = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.black[0]};
        text-decoration: underline;
        &:hover{
            color: ${palette.black[0]};
        }
    }
`;



const AuthForm = ({type}) => {
    
    const text = textMap[type];

    return (
        <AuthFormWrapper>
            <h3>{text} 해주세요!</h3>
            <form>
                <FormInput autoComplete='username' name='username' placeholder='아이디'/>
                <FormInput
                    autoComplete = 'new-password'
                    name = 'password'
                    placeholder = '비밀번호'
                    type = 'password'
                />

                {type === 'register' && (
                    <FormInput
                        autoComplete = 'new-password'
                        name = 'passwordConfirm'
                        placeholder = '비밀번호 확인'
                        type = 'password'
                    />
                )}

                <Button fullWidth>{text}</Button>
            </form>
            <FormFooter>
                { type === 'login' ? (
                    <Link to = '/register'>회원가입</Link>
                ) : (
                    <Link to = '/login'>로그인</Link>
                )}
            </FormFooter>
        </AuthFormWrapper>
    );
};

export default AuthForm;