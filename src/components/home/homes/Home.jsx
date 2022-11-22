import React from "react";

export default function Home() {
  return (
    <section className="home">
      <div className="container flex align-items-center">
        <div className="left d-sm-none d-lg-block">
          <div className="img">
            <img src="./assets/home.png" alt="" />
          </div>
        </div>
        <div className="rigt topMargin">
          <h1>
            Hello!<br />
            I am a Frontend Developer
          </h1>
          <div className="socialIcon">
            <i class="fab fa-facebook-f facebook"></i>
            <i class="fab fa-instagram instagram"></i>
            <i class="fab fa-twitter twitter"></i>
            <i class="fab fa-youtube youtube"></i>
            <i class="fab fa-pinterest pinterest"></i>
            <i class="fab fa-dribbble dribbble"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, aut
            ab. Modi unde dolorum repudiandae voluptatum odio recusandae minus
            tempora ducimus! Dolorum officiis numquam molestias accusantium
            ipsa, iure voluptatum at.
          </p>
          <button className="primary-btn ">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
