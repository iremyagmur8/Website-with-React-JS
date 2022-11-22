import React from "react";

export default function About() {
  const data = [
    {
      title: "Who I Am And What I Do",
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
      desc2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      desc3:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cover: "./assets/about.webp",
    },
  ];
  return (
    <>
      <section className="about topMargin" style={{marginBottom:'50px'}}>
        <div className="container flex">
          {data.map((val) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>About Me</h3>
                    <h1>{val.title}</h1>
                  </div>
                  <p>{val.desc1}</p>
                  <p>{val.desc2}</p>
                  <p>{val.desc3}</p>
                  <button className="primary-btn">Download CV</button>
                </div>
                <div className="right">
                    <div className="img d-sm-none d-lg-block">
                        <img src={val.cover} alt="..." />
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
