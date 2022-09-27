import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 50px;

  background-color: #fff;

  border-radius: 6px;

  margin: 1rem 0 0 0;

  button {
    background: #9c9c9c;
    border: 1px solid #999;
    border-radius: 3px;
    font-weight: 700;
    font-size: 10pt;
    color: #333;

    padding: 5px 8px;
  }

  @media screen and (max-width: 990px) {
    width: 300px;
  }
`;
