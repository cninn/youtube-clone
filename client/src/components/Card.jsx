import React from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
const Image = styled.img`
  width:100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  border-radius: 5px;
  object-fit: cover;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0px" : "16px")};
  gap: 12px;
  flex: 1;
  
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div`
  width: 100%;
  
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  font-size: ${(props) => (props.type === "sm" ? "14px" : "16px")};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 9px 0px;
  font-size: ${(props) => (props.type === "sm" ? "14px" : "16px")};
`;
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  display: flex;
  gap: 5px;
  align-items: ${(props) => (props.type === "sm" ? "flex-start" : "space-between")};
  justify-content: ${(props) => (props.type === "sm" ? "flex-start" : "space-between")};
  
  width: 100%;
  margin-top: 4px;
  ${(props) => props.type === "sm" && "flex-direction:column;"};
  font-size: ${(props) => (props.type === "sm" ? "10px" : "16px")};
`;
const Eyes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;
const Icon = styled.span`
display:  ${(props) => props.type === "sm" && "none"};
`
const Card = ({ type }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={"/video/test"}>
      <Container type={type}>
        <Image
          type={type}
          src="https://img.chip.com.tr/rcman/Cw912h570q95gm/images/content/2020/01/26/202001262352201588.jpg"
        />
        <Details type={type}>
          <ChannelImage
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            type={type}
          />
          <Texts type={type}>
            <Title type={type}>FullStack Roadmap</Title>
            <ChannelName type={type}>cninnmakes</ChannelName>
            <Info type={type}>
              <p>6 gün önce yüklendi</p>
              <Eyes>
                <Icon type={type}>
                <VisibilityIcon />
                </Icon>
                156 Görüntüleme
              </Eyes>
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
