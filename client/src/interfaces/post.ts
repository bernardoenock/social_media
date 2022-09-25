export interface IPostsRes {
  id?: number | string;
  autor?: string;
  category?: string;
  publication?: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ICreatePosts {
  autor?: string;
  category?: string;
  publication?: string;
}
