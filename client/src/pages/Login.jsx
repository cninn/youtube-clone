import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 22px 96px;
color:${({theme})=>theme.text};
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 56px);
margin: 0;
`

const Wrapper = styled.div`
width: 500px;
padding: 40px;
color:${({theme})=>theme.text};
display: flex;
justify-content: center;
flex-direction: column;
border: 1px solid ${({theme})=>theme.text};
border-radius: 5px;
margin: 0;
background-color:${({theme})=>theme.bg};
gap: 10px;
text-align: center;


`
const Input = styled.input`
width: 100%;
height: 45px;
padding-left: 10px;
border: none;
outline: none;
background-color: ${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-radius: 5px;






`

const Button = styled.button`
background-color: #ff0000;
border: none;
outline: none;
color:white;
height: 36px;
border-radius: 5px;
font-size: 16px;
width: 50%;
align-self: center;
cursor: pointer;
margin-top: 10px;
font-weight: bold;

`
const SoftText = styled.div`
color:${({theme})=>theme.textSoft};
opacity: 0.7;
`

const Hr = styled.hr`
opacity: 0.4;
font-size:5px;
margin-top: 10px;
margin-bottom: 10px;
margin-top: 10px;
color: ${({theme})=>theme.soft};

`
const Login = () => {
  return (
    <Container>
      <Wrapper>
      <h2>Giriş Yap</h2>
      <h4>Fremium avantajları seni bekliyor</h4>
      <Input placeholder='Kullanıcı adı'/>
      <Input placeholder='Şifre'/>
      <Button>
        Giriş Yap
      </Button>
      <SoftText>
      henüz bir hesabın yok mu ?
      <Hr/>
      </SoftText>
      <h2>Kayıt Ol</h2>
      
      <Input placeholder='Kullanıcı adı'/>
      <Input placeholder='Email'/>
      <Input placeholder='Şifre'/>
      <Button style={{backgroundColor:'#2f7bff'}}>
        Kayıt Ol
      </Button>
      </Wrapper>
    </Container>
  )
}

export default Login
