import styled from "styled-components";

export const Footer = () => {
  return (
    <DisplayWrapper>
      <Column1>
        <h1>Column1</h1>
      </Column1>
      <Column2>
        <h1>Column1</h1>
      </Column2>
      <Column3>
        <h1>Column1</h1>
      </Column3>
    </DisplayWrapper>
  );
};
const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  transition: all 0.5s ease-in-out;
`;

const Column1 = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const Column2 = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const Column3 = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;
