import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import {format} from 'timeago.js';
import axios from 'axios';

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
const Card = ({ type , video}) => {

  const [channel,setChannel] = useState({});

  useEffect(()=>{
    const fetchChannel = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/users/find/${video.userId}`);
        setChannel(response.data);
       
       
      } catch (error) {
        console.error(error);
      }
    };
    fetchChannel()
  },[video.userId])
  










  return (
    <Link style={{ textDecoration: "none" }} to={`/video/${video._id}`}>
      <Container type={type}>
        <Image
          type={type}
          src={video.imgUrl}
        />
        <Details type={type}>
          <ChannelImage
            src={channel.img ? channel.img :"https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"}
            type={type}
          />
          <Texts type={type}>
            <Title type={type}>{video.title}</Title>
            <ChannelName type={type}>{channel.name}</ChannelName>
            <Info type={type}>
              <p>{format(video.createdAt)}</p>
              <Eyes>
                <Icon type={type}>
                <VisibilityIcon />
                </Icon>
               {video.views ? `${video.views} Görüntüleme` : '698,999M Görüntüleme'}
              </Eyes>
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
