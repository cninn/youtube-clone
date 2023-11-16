import styled from "styled-components";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 5px;
`;
const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 20px;
`;
const CommentInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 50px;
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
  font-size: 16px;
`;
const CommentImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const Hr = styled.hr`
  color: ${({ theme }) => theme.textSoft};
  opacity: 0.2;
  width: 80%;
  align-self: center;
`;

const NotComment = styled.div`
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  opacity: 0.6;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/comments/${videoId}`
        );
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <CommentInputContainer>
        <CommentImg src={currentUser?.img} />
        <CommentInput placeholder="Yorum ekle..." />
      </CommentInputContainer>

      <Hr />
      {comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}

      <NotComment>Henüz hiç yorum yok...</NotComment>
    </Container>
  );
};

export default Comments;
