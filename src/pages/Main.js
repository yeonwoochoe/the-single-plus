import React from "react";
import ViewBox from "../components/ViewBox";
import ContentBox from "../components/ContentBox";
import SearchBox from "../components/SearchBox";
import SubContentBox from "../components/SubContentBox";
import NewBox from "../components/NewBox";

const Main = () => {
  return (
    <main>
      <ViewBox />
      <ContentBox />
      <SearchBox />
      <SubContentBox />
      <NewBox />
    </main>
  );
};

export default Main;
