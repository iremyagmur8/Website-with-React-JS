import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <img src="./assets/logo.png" alt="" width={100} height={100} />
            <p>
            Sunt eveniet voluptatum laborum, sed reiciendis distinctio suscipit tempore praesentium vel eligendi quisquam rem quis ex. Amet, sapiente id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="socialIcon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-dribbble"></i>
            </div>
          </div>
          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>Recent Post</h2>
            <div className='text'>
              <p>Fantastic Fresh Tuna</p>
              <span> 08 June 2019</span>
            </div>
            <div className='text'>
              <p>Tasty Metal Pants</p>
              <span> 08 July 2015</span>
            </div>
            <div className='text'>
              <p>Handcrafted Fresh Pants</p>
              <span> 28 January 2021</span>
            </div>
          </div>

          <div className='box'>
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, harum perspiciatis.</p>
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>İstanbul/Ataşehir</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Phone:+9555 55 55</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email:hello@iremyagmurcaykara.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>Copyright @2022. All rights reserved.</p>
          <label htmlFor="">
            Design & Developed by <span>IYC</span>
          </label>
        </div>
      </footer>
    </>
  );
}
