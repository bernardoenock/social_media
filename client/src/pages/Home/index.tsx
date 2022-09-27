import { useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Modal from "../../components/Modals";
import CreatePost from "../../components/Modals/CreatePost";

import * as S from "./styles";

const Home: React.FC = (): JSX.Element => {
  const [createPostModal, setCreatePostModal] = useState<boolean>(false);

  const handleModalCreatePost = () => {
    setCreatePostModal(!createPostModal);
  };

  return (
    <>
      <Modal show={createPostModal} close={handleModalCreatePost}>
        <CreatePost handleModal={handleModalCreatePost} />
      </Modal>
      <div>
        <Header />
        <S.HomeContainer>
          <S.ContainerBtn>
            <button type="button" onClick={handleModalCreatePost}>
              Criar Post
            </button>
          </S.ContainerBtn>
        </S.HomeContainer>

        <Main />
      </div>
    </>
  );
};

export default Home;
