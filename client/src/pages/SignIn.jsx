import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";



import GoogleIcon from "@mui/icons-material/Google";




import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 22px 96px;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  margin: 0;
`;

const Wrapper = styled.div`
  width: 500px;
  padding: 40px;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  margin: 0;
  background-color: ${({ theme }) => theme.bg};
  gap: 10px;
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 10px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #ff0000;
  border: none;
  outline: none;
  color: white;
  height: 36px;
  border-radius: 5px;
  font-size: 16px;
  width: 48%;
  align-self: center;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
const SoftText = styled.div`
  color: ${({ theme }) => theme.textSoft};
  opacity: 0.7;
`;

const Hr = styled.hr`
  opacity: 0.4;
  font-size: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.soft};
`;
const SignWrapper = styled.div`
display: flex;
justify-content: space-between;
`
const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post("/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            console.log(res)
            dispatch(loginSuccess(res.data));
            navigate("/")
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
        <h2>Giriş Yap</h2>
        <h4>Fremium avantajları seni bekliyor</h4>
        <Input
           onChange={(e) => setName(e.target.value)}
          placeholder="Kullanıcı adı"
        />
      <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignWrapper>
        <Button onClick={handleLogin}>Giriş Yap</Button>
        <Button
          style={{ backgroundColor: "white", color: "#1163e9ff" }}
          onClick={signInWithGoogle}
        >
          <GoogleIcon style={{ color: "#009424" }} /> Google ile devam et
        </Button>
        </SignWrapper>
        <SoftText>
          henüz bir hesabın yok mu ?
          <Hr />
        </SoftText>
   
        <h2>Kayıt Ol</h2>

        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Kullanıcı adı"
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
        />
        <Button style={{ backgroundColor: "#2f7bff" }}>Kayıt Ol</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
