import React from "react";
import styled from "styled-components";
import Mainlogo from "../img/mainlogo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  ${({ theme }) => theme.text};
  height: 100vh;
  position: sticky;
  top: 0;
  line-height: 22px;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 25px;
  font-size: 20px;
`;
const Img = styled.img`
  height: 30px;
  object-fit: cover;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
    padding-left: 10px;
  }
  transition: all 0.4s;
`;
const Hr = styled.hr`
  opacity: 0.4;
  font-size: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.soft};
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
const Welcome = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #2f7bff;
  border: 2px solid #2f7bff;
  border-radius: 5px;
  padding: 5px 12px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 150px;
`;
const Footer = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 400;
`;
const Menu = ({ darkMode, setDarkMode }) => {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutUser = () => (dispatch) => {
    // Logout action'ını tetikle
    dispatch(logout());
  };

 
    
  
    const handleLogout = () => {
      // logoutUser fonksiyonunu çağır
      dispatch(logoutUser());
    };

  return (
    <Container>
      <Wrapper className="wrapper">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Logo>
            <Img src={Mainlogo} />
            Fremium
          </Logo>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Item>
            <HomeIcon />
            Anasayfa
          </Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"trends"}>
          <Item>
            <ExploreIcon />
            Keşfet
          </Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"subscriptions"}>
          <Item>
            <SubscriptionsIcon />
            Kanallar
          </Item>
        </Link>
        <Hr />

        {currentUser ? (
    <Welcome>
    {currentUser && (
      <>
        <h3>Hoşgeldin<br/>{`${currentUser.name}`}</h3>
        
        <p>Fremium dünyasını keşfetmeye hazırsın</p>
      </>
    )}
  </Welcome>
        ) : (
          <Text>
            Giriş yap, videoları beğen yorumla, takip et ve daha fazlası
            <Link style={{ textDecoration: "none" }} to={"signin"}>
              <Button>
                <AccountCircleIcon />
                GİRİŞ YAP
              </Button>
            </Link>
          </Text>
        )}

        <Hr />
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          Tema
        </Item>


        <Hr />
        <Item onClick={handleLogout}>
          <PowerSettingsNewIcon/>
          Çıkış yap
        </Item>
        <Footer className="footer">
          <Item>
            <CopyrightIcon />
            cninnmakes
          </Item>

          <Text>fullstack mern project</Text>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Menu;
