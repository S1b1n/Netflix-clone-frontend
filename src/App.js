import React from "react";

import"./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import RowPost from "./components/RowPost/RowPost";
import{MovieUrl,ActionUrl,DramaUrl,comadyUrl}from "./url"




function App() {
  return (
    <div className="App">
     <Navbar />
<Banner />
<RowPost url={MovieUrl} title="Netflix orginals" />
<RowPost url={ActionUrl} title="Action" isSmall />
<RowPost url={comadyUrl}  title="Comedy" isSmall />
<RowPost url={DramaUrl} title="Drama" isSmall />
    </div>
  );
}

export default App;
