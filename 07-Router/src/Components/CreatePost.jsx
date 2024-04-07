import React, { useContext, useRef } from "react";
import { PostList } from "../Store/postList-store";
import { Link, useNavigate,useSearchParams } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
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

    //cleaning the input fileds
    userIdElement.current.value = "";
    titleElement.current.value = "";
    ContentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: content,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/", {
          post: post,
        });
      });

    // addPost(userId, title, content, reactions, tags);
  };


  const [searchParams] = useSearchParams({
    name: 'amardip',
    age: '23'
  });
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
      <Link to={{
        pathname : "/",
        state : {
          name : "amardip",
          age : 23
        } , 
        search: searchParams.toString()
      }}>
        <button>hello  </button>
      </Link>
    </form>
  );
};

export default CreatePost;
