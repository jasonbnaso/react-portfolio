import React from "react";
import "./Home.scss";

export const Home = () => {
  return (
    <main className="home">
      <div className="row">
        <div className="col-sm-12 center">
          <h1>Frontend Developer</h1>
        </div>
      </div>
      <div className="about">
        <div className="row">
          <div className="col-sm-6 offset-sm-2 center">
            <div className="text">
              <p className="author">
                <strong>Jason Naso</strong>
              </p>
              <div className="divider div-transparent"></div>
              <h5>
                I am a creative and ambitious individual with a passion for web
                development and design. I am currently in my fourth year working
                positive, enthusiastic and competent Web Developer who, over the
                years, has built up a diverse range of skills.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
