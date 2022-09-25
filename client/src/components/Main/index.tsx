import Feed from "./Feed";
import * as S from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <S.MainContainer>
        <h1>Component Account</h1>
        <Feed />
        <h1>Component Highlights</h1>
      </S.MainContainer>
    </>
  );
};

export default Main;
