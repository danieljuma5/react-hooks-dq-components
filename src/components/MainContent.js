import React from "react";
import AlbumList from "./AlbumList";
import GenrePicker from "./GenrePicker";

function MainContent() {
  return <main>{/* AlbumList */}
  <GenrePicker/>
   <AlbumList/>
  </main>;
}

export default MainContent;
