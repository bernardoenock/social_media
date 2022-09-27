import styled from "styled-components";

export const Centralize = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;

  background-color: #fff;
`;

export const ContainerForm = styled.form`
  width: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const TopForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;

  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom: 1px solid #e5e5e5;
  border-left: 4px solid #6c80be;

  h3 {
    font-weight: 800;
    color: #224871;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 6px;

  margin-bottom: 1rem;
`;

export const SectionInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  padding: 0.6rem;

  input {
    width: 100%;
    border-radius: 3px;
    border: 1px solid #cccccc;
    padding: 0.5rem;
    ::placeholder {
      font-family: "Lato", sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      color: #c4c4c4;
    }
  }

  select {
    width: 100%;
    border-radius: 3px;
    border: 1px solid #cccccc;
    background-color: #fff;
    padding: 0.5rem;

    font-family: "Lato", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #c4c4c4;
  }

  textarea {
    width: 100%;
    border-radius: 3px;
    border: 1px solid #cccccc;
    padding: 0.5rem;

    ::placeholder {
      font-family: "Lato", sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      color: #c4c4c4;
    }
  }
`;

export const ContainerImg = styled.div`
  input {
    color: transparent;
  }

  input::-webkit-file-upload-button {
    visibility: hidden;
  }
  input::before {
    content: "IMAGEM";
    display: inline-block;
    background: #6c80be;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;

    font-weight: 700;
    font-size: 10pt;
    color: #fff;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  button {
    background: #6c80be;
    border: 1px solid #999;
    border-radius: 3px;
    font-weight: 700;
    font-size: 10pt;
    color: #fff;

    padding: 5px 8px;

    width: 100px;

    margin: 0 6rem 0 0;
  }

  padding: 0 0 0 6rem;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    margin-left: 1rem;

    button {
      margin: -1.3rem 0 0 0;
    }
  }
`;

export const BottomForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;

  border-top: 1px solid #e5e5e5;
`;
