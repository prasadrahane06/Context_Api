import React, { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/postList-store";
import { Welcome } from "./Welcome";
import { LoadingSpinner } from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // const [fetchData, setFetchData] = useState(false);
  const [fetching, setFetching] = useState(false);
  // if (!fetchData) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  //   setFetchData(true);
  // }

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning...");
      controller.abort();
    };
  }, []);
  const handleFetchPosts = () => {
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     addInitialPosts(data.posts);
    //   });
  };
  return (
    <>
      <div className="overflow-auto">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && (
          <Welcome onGetPostClick={handleFetchPosts} />
        )}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
