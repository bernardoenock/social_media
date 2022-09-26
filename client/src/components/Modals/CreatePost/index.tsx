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

import imgIcon from "../../../assets/icons/btn_image.svg";

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
      <S.ContainerForm onSubmit={handleCreatePost}>
        <S.TopForm>
          <h3>Criar post</h3>
          <CloseModalBtn type="button" onClick={handleModal} />
        </S.TopForm>
        <S.ContainerInputs>
          <S.SectionInput>
            <input
              type="text"
              value={autor}
              onChange={(event) => {
                setAutor(event.target.value);
              }}
              placeholder="Autor do Post"
            />
          </S.SectionInput>
          <S.SectionInput>
            <select
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value="">Selecione a Categoria</option>
              <option value="Post">Post</option>
              <option value="Artigo">Artigo</option>
              <option value="Evento">Evento</option>
            </select>
          </S.SectionInput>
          <S.SectionInput>
            <textarea
              value={publication}
              onChange={(event) => {
                setPublication(event.target.value);
              }}
              placeholder="Escrever publicação."
            />
          </S.SectionInput>
          <S.ContainerBtn>
            <S.ContainerImg>
              <input type="file" onChange={changeHandler}></input>
            </S.ContainerImg>

            <button type="submit">PUBLICAR</button>
          </S.ContainerBtn>
        </S.ContainerInputs>
        <S.BottomForm></S.BottomForm>
      </S.ContainerForm>
    </S.Centralize>
  );
};

export default CreatePost;
