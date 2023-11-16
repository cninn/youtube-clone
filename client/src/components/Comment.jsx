import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CommentContainer = styled.div`
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  padding-left: 50px;
`;
const CommentTitle = styled.h2`
  font-size: 18px;
  cursor: pointer;
`;
const CommentSpan = styled.span`
  opacity: 0.6;
`;
const CommentP = styled.p`
  margin-left: 50px;
`;
const CommentText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CommentImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const CommentWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users/find/${comment.userId}`
      );
      setChannel(res.data);
    };
    fetchComments();
  }, [comment.userId]);

  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentImg src={channel?.img} />
        <CommentText>
          <CommentTitle>{channel?.name}</CommentTitle>
          <CommentSpan>{channel?.createdAt}</CommentSpan>
        </CommentText>
      </CommentWrapper>
      <CommentP>{comment.desc}</CommentP>
    </CommentContainer>
  );
};

export default Comment;
