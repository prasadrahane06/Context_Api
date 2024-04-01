import React, { useContext, useRef } from "react";
import { PostList } from "../Store/postList-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const titleElement = useRef();
  const ContentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const content = ContentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, title, content, reactions, tags);
  };
  return (
    <form
      className="grid  md:ml-[300px] mx-[20px] border border-gray-200 rounded-lg shadow min-w-60 max-w-3xl py-10 h-auto mt-[30px] "
      onSubmit={handleSubmit}
    >
      <div className="mx-3 ">
        <div className="mb-3 ">
          <label htmlFor="body" className="form-label font-semibold">
            Enter your userId here :
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control  "
            id="userId"
            placeholder="Enter your UserId here"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label font-semibold">
            Post Title :
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control "
            id="title"
            placeholder="Enter your Post Title here..!"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="body" className="form-label font-semibold">
            Post Content :
          </label>
          <textarea
            type="text"
            ref={ContentElement}
            rows="4"
            style={{ resize: "none" }}
            className="form-control "
            id="Content"
            placeholder="Enter your Post Content here..!"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="body" className="form-label font-semibold">
            Number of Reactions :
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control "
            id="reactions"
            placeholder="How many reactions ?"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="body" className="form-label font-semibold">
            Enter your hastags here :
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control "
            id="tags"
            placeholder="Enter your #tags here ?"
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary text-white font-semibold bg-blue-700 text-[20px] w-32 mx-3 "
      >
        Post
      </button>
    </form>
  );
};

export default CreatePost;
