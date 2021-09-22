import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  border-bottom: 1px solid #bac1ca;
  padding: 17px 20px;
  color:${props => props.theme.headText};
  background:${props => props.theme.head};
`;

export const ThemeMode = styled.div`
  margin-right: 30px;
`;

export const ThemeIconWrapper = styled.div`
  font-size: 22px;
  cursor: pointer;
`;

export const UserProfile = styled.div`
  margin-right: 40px;
`;
