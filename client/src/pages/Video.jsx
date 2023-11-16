import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import Comments from "../components/Comments";
/* import Card from "../components/Card"; */
import { useDispatch, useSelector } from "react-redux";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

import { subscription } from "../redux/userSlice";
import { fetchSuccess, like, dislike } from "../redux/videoSlice";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import Recommendation from "../components/Recommendation";






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
const VideoFrame = styled.video`
  max-height: 500px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {


  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };


  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} &#x25CF; {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}{" "}
              {currentVideo.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo.dislikes?.includes(currentUser?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}{" "}
              Dislike
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
            <ChannelImg src={channel.img} />
            <ChannelText>
              <Channelh1>{channel?.name}</Channelh1>
              <ChannelSpan>{channel?.subscribers}</ChannelSpan>
              <ChannelSpan>{currentVideo?.desc}</ChannelSpan>
            </ChannelText>
            <SubscribeButton onClick={handleSub}>
              {currentUser?.subscribedUsers?.includes(channel._id)
                ? "ABONE OLUNDU"
                : "ABONE OL"}
            </SubscribeButton>
          </ChannelInfo>
        </Channel>
        <Comments videoId={currentVideo._id} />
      </Content>

    <Recommendation tags={currentVideo.tags}/>
    </Container>
  );
};

export default Video;
