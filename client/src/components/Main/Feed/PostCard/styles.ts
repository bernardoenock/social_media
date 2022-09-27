import styled from "styled-components";

export const CardPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;

  background: #fff;
  border: 1px solid #e7ebf2;

  padding: 15px 20px 10px;
  margin-bottom: 10px;

  border-radius: 3px;
`;

export const TopPostCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  img {
    width: 50px;
    border-radius: 50%;
  }
`;

export const CardAutorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  margin: 0.4rem 1rem 0 0rem;

  h3 {
    font-weight: 900;
    font-size: 1rem;
    color: #29325d;
  }
  span {
    font-weight: 400;
    font-size: 0.7rem;
    color: #666;
  }
`;

export const InfoIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 1rem;
  width: 20%;
`;

export const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;

  margin: 1rem;

  padding-left: 1rem;

  img {
    width: 20px;
  }

  p {
    font-weight: 700;
    font-size: 0.8rem;
    color: #29325d;
    text-align: center;
    margin-left: 0.5rem;
  }
`;

export const ConstainerPubli = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: start;

  img {
    width: 100%;
  }
`;

export const ContainerTextPubli = styled.div`
  display: flex;
  align-items: start;
  text-align: start;
  width: 100%;
  p {
    font-size: 0.8rem;
    font-weight: 400;
    color: #666;
    margin: 1rem 0 1rem 0;
  }
`;
