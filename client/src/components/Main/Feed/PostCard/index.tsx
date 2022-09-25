import { IPostsRes } from "../../../../interfaces/post";

import AvatarImg from "../../../../assets/img/avatar_default.png";
import IconFeed from "../../../../assets/icons/feed.svg";
import { SiPinboard } from "react-icons/si";
import { BsBookmark } from "react-icons/bs";

import * as S from "./styles";
import { formatDate } from "../../../../utils/formatDate";

const PostCard: React.FC<{ post: IPostsRes }> = ({ post }) => {
  const postCreateAt = formatDate(post.created_at);

  return (
    <S.CardPostContainer>
      <S.TopPostCard>
        <img src={AvatarImg} alt={`${post.autor}`} />
        <S.CardAutorInfo>
          <h3>{post.autor}</h3>
          <span>{postCreateAt}</span>
        </S.CardAutorInfo>
        <S.InfoIcons>
          <SiPinboard />
          <BsBookmark />
        </S.InfoIcons>
      </S.TopPostCard>

      <S.ContainerCategory>
        <img src={IconFeed} alt={`Categoria ${post.category}`} />
        <p>{post.category}</p>
      </S.ContainerCategory>

      <div>
        <p>{post.publication}</p>
        <img
          src={`http://localhost:8001/storage/post/image/ZvX36ZRQ9qA5qejZ.png`}
          alt={`${post.publication}`}
        />
      </div>
    </S.CardPostContainer>
  );
};

export default PostCard;
