import styled from "styled-components";

export const ModalHead = styled.div`
  color: ${(props) => props.theme.headText};
  text-align: center;
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const PostTitle = styled.div`
  color: ${(props) => props.theme.headText};
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 500;
`;

export const PostDesc = styled.div`
  color: #a1a1a1;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const PostTag = styled.div`
  background: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.tagText};
  padding: 2px 8px;
  display: inline-block;
  border-radius: 10px;
  margin-bottom:25px;
`;
