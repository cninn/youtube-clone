import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import Comments from "../components/Comments";
import Card  from '../components/Card'

const Container = styled.div`

  display: flex;
  gap: 24px;
  padding-left: 40px;
  padding-top: 22px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  opacity: 0.8;
`;
const Hr = styled.hr`
  color: ${({ theme }) => theme.soft};
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.5;
`;

const Recommendation = styled.div`

  flex: 2;
`;
const Channel = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  padding: 20px;
  border-radius: 5px;
`;
const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  align-self: flex-start;
  cursor: pointer;
`;
const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
  color: ${({ theme }) => theme.text};
`;
const Channelh1 = styled.h1`
  margin-top: 3px;
  cursor: pointer;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.5px;
`;
const ChannelSpan = styled.span`
  opacity: 0.6;
`;

const SubscribeButton = styled.button`
  background-color: #cc1a00;
  margin-left: auto;
  border: none;
  outline: none;
  color: white;
  font-weight: 500;
  padding: 9px 27px;
  border-radius: 3px;
  cursor: pointer;
  align-self: flex-start;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/-vufEiLvuAY?si=kfhZOrBJ7AbLArhu"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </VideoWrapper>
        <Title>Mode XL - Pardon</Title>
        <Details>
          <Info>7,948,14 Görüntüleme &#x25CF; Ağustos 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
            </Button>
            <Button>
              <ThumbDownIcon />
            </Button>
            <Button>
              <ShareIcon />
              Paylaş
            </Button>
            <Button>
              <DataSaverOnIcon />
              Kaydet
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcy2GPBsBuO7KQLqtZPVTPiG8W3Kf3Asm1g&usqp=CAU" />
            <ChannelText>
              <Channelh1>cninnmakes</Channelh1>
              <ChannelSpan>150K Abone</ChannelSpan>
              <ChannelSpan>
                Türkçe rap tarihinin en gözde gruplarından olan Mode XL son
                aylarda yeni single ile severlerini mutlu etmeyi başardı.
                Keyifli dinlemeler diliyoruz
              </ChannelSpan>
            </ChannelText>
            <SubscribeButton>ABONE OL</SubscribeButton>
          </ChannelInfo>
        </Channel>
        <Comments />
      </Content>

      <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation>
    </Container>
  );
};

export default Video;
