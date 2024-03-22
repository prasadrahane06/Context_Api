import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/postList-store";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      <div className="overflow-auto">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
