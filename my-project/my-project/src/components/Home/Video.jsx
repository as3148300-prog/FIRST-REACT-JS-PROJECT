import React from "react";

const Video = () => {
  return (
    <video 
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1782906460~exp=1782910060~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=6dd97258af400b8d65bb6c1117bda47bfb320fa5c95e8fb91355d3a030bac4e4&r=dXMtZWFzdDE%3D"
    />
  );
};

export default Video;