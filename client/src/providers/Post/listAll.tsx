import React, { createContext, useContext } from "react";
import { IPostsRes } from "../../interfaces/post";
import { linkLeiAPI } from "../../services/urls.api";

interface IListContext {
  getListPosts: () => Promise<IPostsRes[]>;
}

export const ListPostContext = createContext({} as IListContext);

export const ListPostProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getListPosts = async () => {
    const response = await linkLeiAPI
      .get("/api/posts")
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  return (
    <ListPostContext.Provider value={{ getListPosts }}>
      {children}
    </ListPostContext.Provider>
  );
};

export const useListPost = () => useContext(ListPostContext);
