import React from "react";
import { CreatePostProvider } from "./Post/create";
import { ListPostProvider } from "./Post/listAll";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CreatePostProvider>
      <ListPostProvider>{children}</ListPostProvider>
    </CreatePostProvider>
  );
};

export default Providers;
