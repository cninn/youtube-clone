import styled from "styled-components";
import Comment from "./Comment";


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

const Comments = () => {
  return (
    <Container>
      <CommentInputContainer>
        <CommentImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8QgVWW6raOHBFS_RFwpQjS6BLB8m9C95irhn7meZMsKMV1NSi85Qy567z6IrwljxBY8&usqp=CAU" />
        <CommentInput placeholder="Yorum ekle..." />
      </CommentInputContainer>

      <Hr />

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />

      <NotComment>Henüz hiç yorum yok...</NotComment>
    </Container>
  );
};

export default Comments;
