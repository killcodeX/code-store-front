import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 10px 15px;
  background: ${(props) => props.theme.cardBackground};
  border-radius: 5px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
`;

export const CardTitle = styled.div`
  color: ${(props) => props.theme.cardText};
  font-size: 19px;
  font-weight: 600;
  line-height: 26px;
  min-height: 40px;
  margin-bottom: 10px;
`;

export const CardDescription = styled.div`
  font-size: 15px;
  font-weight: 400;
  min-height: 80px;
  margin-bottom: 15px;
  color: #a1a1a1;
  //overflow: hidden;
  //white-spaces: nowrap;
  //text-overflow: ellipsis;
`;

export const CardCategory = styled.div`
  background: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.tagText};
  padding: 2px 8px;
  display: inline-block;
  border-radius: 10px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  height: 35px;
  margin: 16px auto;
`;

export const DisplayIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #50ae82;
  background: #e9fbf2;
  width: 2em !important;
  height: 2em !important;
  border-radius: 50%;
  cursor: pointer;
`;

export const EditIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #d958d0;
  background: #f5f3ff;
  width: 2em !important;
  height: 2em !important;
  border-radius: 50%;
  cursor: pointer;
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #fd5b5f;
  background: #fdeeec;
  width: 2em !important;
  height: 2em !important;
  border-radius: 50%;
  cursor: pointer;
`;
