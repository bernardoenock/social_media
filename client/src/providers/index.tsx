import React from "react";
import { CreatePostProvider } from "./Post/create";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CreatePostProvider>{children}</CreatePostProvider>;
};

export default Providers;
