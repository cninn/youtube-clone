import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 100%;
  background-color: transparent;
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

  width: 150px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Ara" />
          <SearchIcon />
        </Search>
        <Link style={{textDecoration:'none'}} to={'login'}>
        <Button>
          <AccountCircleIcon />
          GİRİŞ YAP
        </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
