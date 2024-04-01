import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
  // addInitialPosts: () => {},
});
const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state];

    case "ADD_INITIAL_POSTS":
      return action.payload.posts;

    case "DELETE_POST":
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    // console.log(
    //   `${userId} ${userId}  ${title} ${content} ${reactions}, ${tags}`
    // );
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    // dispatchPostList({
    //   type: "DELETE_POST",
    //   payload: {
    //     postId,
    //   },
    // });
    dispatchPostList({ type: "DELETE_POST", id: postId });
  };

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
      // console.log("Cleaning...");
      controller.abort();
    };
  }, []);
  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to mumbai",
//     body: "Hii friends I am going to mumbai to enjoy",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai"],
//   },
//   {
//     id: "2",
//     title: "We DId it ",
//     body: "We became the richest person on the planet",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Rich", "unbelievable"],
//   },
// ];
export default PostListProvider;
