// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useLoad } from "../../../providers/Loading";
// import { usePost } from "../../../providers/Post/create";
// import { PostSchema } from "../../../validations/post.validations";

// import { ICreatePosts } from "../../../interfaces/post";

import { CloseModalBtn } from "../../Buttons/CloseModalBtn";
import * as S from "./styles";
// import GeneralInput from "../../Inputs/GeneralInput";
// import SelectInput from "../../Inputs/SelectInput";
// import TextArea from "../../Inputs/TextArea";
import { useState } from "react";

import { linkLeiAPI } from "../../../services/urls.api";

interface IHandleModal {
  handleModal: () => void;
}

const CreatePost = ({ handleModal }: IHandleModal) => {
  const [autor, setAutor] = useState("");
  const [category, setCategory] = useState("");
  const [publication, setPublication] = useState("");
  const [image, setImage] = useState<any>();

  const changeHandler = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleCreatePost = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("autor", autor);
    formData.append("category", category);
    formData.append("publication", publication);
    formData.append("image", image);

    await linkLeiAPI
      .post(`/api/posts`, formData)
      .then((res) => {
        console.log(res);
        document.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      });
  };

  return (
    <S.Centralize>
      <form onSubmit={handleCreatePost}>
        <S.TopForm>
          <h3>Criar post</h3>
          <CloseModalBtn type="button" onClick={handleModal} />
        </S.TopForm>
        <S.ContainerInputs>
          <input
            type="text"
            value={autor}
            onChange={(event) => {
              setAutor(event.target.value);
            }}
          />

          <select
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option value="">Selecione uma Categoria</option>
            <option value="Post">Post</option>
            <option value="Artigo">Artigo</option>
            <option value="Evento">Evento</option>
          </select>

          <textarea
            value={publication}
            onChange={(event) => {
              setPublication(event.target.value);
            }}
          />

          <input type="file" onChange={changeHandler} />

          <button type="submit">Postar</button>
        </S.ContainerInputs>
      </form>
    </S.Centralize>
  );
};

export default CreatePost;
