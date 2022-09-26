import styled from "styled-components";

export const ButtonModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
  padding-bottom: 2rem;

  button {
    background: #6c80be;
    height: 1.5rem;

    svg:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
