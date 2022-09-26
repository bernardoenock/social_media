import { useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Modal from "../../components/Modals";
import CreatePost from "../../components/Modals/CreatePost";

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
        <Main />
        <button type="button" onClick={handleModalCreatePost}>
          Criar post
        </button>
      </div>
    </>
  );
};

export default Home;
