import styled from "styled-components";

const NearCom = () => {
  return (
    <Main>
      <div>NEARCOMPANY</div>
    </Main>
  );
};

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  div {
    margin: -20% 0 0 -50%;
    font-size: 5rem;
    font-weight: 900;
  }
`;

export default NearCom;
