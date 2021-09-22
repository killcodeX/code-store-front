import styled from "styled-components";

export const HomeSectionWrapper = styled.section`
  position: relative;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  min-height: 100vh;
  transition: all 0.5s ease;
  padding: 50px 20px;
  background: ${(props) => props.theme.body};
`;

export const NoDataBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 27rem;
  //height: 25rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const ClearSearch = styled.div`
  display: flex;
  position: absolute;
  top: 3%;
  right: 4%;
  border: 1px solid ${props => props.theme.sideText};;
  padding: 4px 8px;
  border-radius: 10px;
  cursor: pointer;
  color:${props => props.theme.sideText};
  @media (max-width: 480px) {
    top: 1%;
  }
`;

export const ClearIconwrapper = styled.div`
  font-size: 14px;
  padding-right: 5px;
`;

export const ClearText = styled.span``;
