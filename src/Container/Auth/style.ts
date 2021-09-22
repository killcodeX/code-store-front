import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100vh;
  padding: 40px 0;
  background-color: #f2f2f5;
`;

export const AuthBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const CardWrapper = styled.div`
  width: 400px;
  min-height: 450px;
  padding: 20px 25px;
  border-radius: 10px;
  background: #fff;
  //border: 1px solid black;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23px;
  font-weight: 600;
`;

export const CardTitle = styled.div`
  font-size: 21px;
  font-weight: 400;
  font-family: cursive;
  margin: 16px 0;
`;