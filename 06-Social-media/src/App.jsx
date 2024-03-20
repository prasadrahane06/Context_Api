import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Siderbar } from "./Components/Siderbar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  const [selectedtab, SetselectedTab] = useState("Home");
  return (
    <>
      <div className="flex h-screen ">
        <Siderbar selectedtab={selectedtab} SetselectedTab={SetselectedTab} />
        <div className="w-full ">
          <Header />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
