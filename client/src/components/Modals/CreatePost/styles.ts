import styled from "styled-components";

export const Centralize = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;

  background-color: #fff;
`;

export const ContainerForm = styled.form`
  max-width: 100%;
  max-height: 100%;
  overflow-y: scroll;

  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
`;

export const TopForm = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;
