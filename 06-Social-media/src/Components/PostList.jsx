import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/postList-store";
import { Welcome } from "./Welcome";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const handleFetchPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };
  return (
    <>
      <div className="overflow-auto">
        {postList.length === 0 && <Welcome onGetPostClick={handleFetchPosts} />}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
