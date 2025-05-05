import React from "react";

const BackgroundVideo = ({ video = "/video-fondo1.mp4" }) => (
  <>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src={video} type="video/mp4" />
      Tu navegador no soporta el video HTML5.
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
  </>
);

export default BackgroundVideo;
