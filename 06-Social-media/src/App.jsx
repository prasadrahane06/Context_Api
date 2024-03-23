import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Siderbar } from "./Components/Siderbar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostListProvider from "./Store/postList-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="flex  ">
        <Siderbar selectedtab={selectedTab} SetselectedTab={setSelectedTab} />
        <div className="w-full overflow-hidden">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
