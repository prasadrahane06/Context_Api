import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
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
  const addPost = (userId, title, content, reactions, tags) => {
    // console.log(
    //   `${userId} ${userId}  ${title} ${content} ${reactions}, ${tags}`
    // );
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: content,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
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
  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
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
