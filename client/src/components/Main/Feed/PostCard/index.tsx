import { IPostsRes } from "../../../../interfaces/post";

import AvatarImg from "../../../../assets/img/avatar_default.png";
import IconFeed from "../../../../assets/icons/feed.svg";

const PostCard: React.FC<{ post: IPostsRes }> = ({ post }) => {
  return (
    <div>
      <div>
        <img src={AvatarImg} alt={`${post.autor}`} />
        <div id="avatar-info">
          <h3>{post.autor}</h3>
          <span>Publicado em {post.created_at}</span>
        </div>
      </div>

      <div>
        <img src={IconFeed} alt={`Categoria ${post.category}`} />
        <p>{post.category}</p>
      </div>

      <div>
        <p>{post.publication}</p>
        <img
          src={`http://localhost:8001/storage/post/image/ZvX36ZRQ9qA5qejZ.png`}
          alt={`${post.publication}`}
        />
      </div>
    </div>
  );
};

export default PostCard;
