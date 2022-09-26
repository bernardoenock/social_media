import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { linkLeiAPI } from "../../services/urls.api";

import { ICreatePostsProvider } from "../../interfaces/post";
import { useLoad } from "../Loading";

type IPostTypeContext = {
  createPost: (data: ICreatePostsProvider, image: File) => Promise<void>;
};

const initialValue = {
  post: {},
  createPost: async () => {},
};

export const CreatePostContext = createContext<IPostTypeContext>(initialValue);

export const CreatePostProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const history = useHistory();

  const { hiddenLoad } = useLoad();

  const createPost = async (data: ICreatePostsProvider, image: File) => {
    const formData = new FormData();

    formData.append("autor", data.autor);
    formData.append("category", data.category);
    formData.append("publication", data.publication);
    formData.append("image", image);

    await linkLeiAPI
      .post("/api/posts", formData)
      .then((res) => {
        console.log(res);
        toast.success("Post Enviado!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        toast.warning(err.response.data.message);
      });
    hiddenLoad();
  };

  return (
    <CreatePostContext.Provider value={{ createPost }}>
      {children}
    </CreatePostContext.Provider>
  );
};

export const usePost = () => useContext(CreatePostContext);
