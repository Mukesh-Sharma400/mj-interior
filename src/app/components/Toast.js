import styled from "styled-components";

export const Toast = ({ message, color }) => {
  return <DisplayWrapper color={color}>{message}</DisplayWrapper>;
};

const DisplayWrapper = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  background: rgba(225, 225, 225, 0.3);
  box-shadow: 0 4px 15px rgba(225, 225, 225, 0.3);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(225, 225, 225, 1);
  transition: all 0.5s ease-in-out;

  @media (max-width: 400px) {
    width: 300px;
  }
`;
