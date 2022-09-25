import { useCallback, useEffect, useState } from "react";
import { IPostsRes } from "../../../interfaces/post";
import { useListPost } from "../../../providers/Post/listAll";
import LoaderLocalComponent from "../../Loader/LoaderLocalComponent";
import PostCard from "./PostCard";
import * as S from "./styles";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPostsRes[]>([]);
  const [loadding, setLoadding] = useState(false);
  const { getListPosts } = useListPost();

  const handlePosts = useCallback(async () => {
    const post = await getListPosts();
    console.log(post);
    setPosts(post!);
    setLoadding(false);
  }, [getListPosts]);

  useEffect(() => {
    setLoadding(true);
    handlePosts();
  }, [handlePosts]);

  return (
    <>
      <S.FeedContainer>
        <h1>Component CardPost</h1>
        <div>
          {loadding ? (
            <LoaderLocalComponent />
          ) : posts.length ? (
            posts.map((item) => <PostCard key={item.id} post={item} />)
          ) : (
            <p>Nenhum Post Publicado</p>
          )}
        </div>
      </S.FeedContainer>
    </>
  );
};

export default Feed;
