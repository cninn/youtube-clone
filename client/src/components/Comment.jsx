import React from 'react'
import styled from 'styled-components';


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
margin-left:50px;
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
`

 const Comment = () => {

  
   

  
  return (
    <CommentContainer>
    <CommentWrapper>
    <CommentImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8QgVWW6raOHBFS_RFwpQjS6BLB8m9C95irhn7meZMsKMV1NSi85Qy567z6IrwljxBY8&usqp=CAU" />
    <CommentText>
      <CommentTitle>cninnmakes</CommentTitle>
      <CommentSpan>3 gün önce</CommentSpan>

    </CommentText>
    </CommentWrapper>
    <CommentP>
        Son zamanlarda dinlediğim en iyi şarkılardan birisiydi. umarım daha
        güzel parçalar dinleriz.
      </CommentP>
  </CommentContainer>
  )
}

export default Comment

