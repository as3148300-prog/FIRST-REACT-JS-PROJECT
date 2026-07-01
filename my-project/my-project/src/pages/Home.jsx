import React from "react";
import Video from "../components/Home/Video";
import Homeherotext from "../components/Home/Homeherotext";
const Home = () => {
  return (
    <div >
     <div className="h-screen w-screen fixed ">
       <Video/>
     </div>
     <div className="relative text-center ">
         <Homeherotext/>
     </div>
    </div>
  );
};

export default Home;