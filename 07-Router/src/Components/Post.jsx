import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList as PostListData } from "../Store/postList-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card mx-[40px] mt-[40px] m-w-[400px] border-gray-200 rounded-lg shadow ">
      <div className="card-body ">
        <h5 className="card-title font-bold uppercase text-[20px]">
          {post.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
            <span class="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text text-[17px]">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            class="badge text-bg-primary mx-[3px] mt-[10px] text-[13px]"
          >
            {tag}
          </span>
        ))}
        <div class="alert alert-success mt-6 w-full" role="alert">
          These post has been reacted by{" "}
          <span className="font-bold text-red-500">{post.reactions} </span>
          peopel.
        </div>
      </div>
    </div>
  );
};

export default Post;
