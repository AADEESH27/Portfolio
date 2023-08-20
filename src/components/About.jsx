import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I am a web developer based in Jammu and Kashmir and passionate about
          crafting digital experiences through the MERN (MongoDB, Express,
          React, Node.js) stack also currently trying to dive into the world of
          NextJs, I am an aspiring web developer on a journey to transform ideas
          into immersive online realities. With a deep love for clean code and
          elegant design, my portfolio website stands as a testament to my
          dedication, showcasing not only my technical prowess but also my
          creative flair. Join me as I continue to explore the ever-evolving
          landscape of web development, driven by the desire to bring innovation
          and user-centric solutions to the digital world
        </p>
      </div>
    </div>
  );
};

export default About;
