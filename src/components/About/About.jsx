import React from "react";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section>
      <h2>ABOUT</h2>
      <div>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with Laptop"
        />
        <ul>
          <li>
            <img
              src={getImageUrl("about/FrontendDevelopment.png")}
              alt="UI Icon"
            />
            <div>
              <h3>Frontend Developer</h3>
            </div>
          </li>
          <li>
            <img
              src={getImageUrl("about/GameDevelopment.png")}
              alt="Controller Icon"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
