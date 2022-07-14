import React from "react";
import "./bg.css";

export default function Page1() {
  return (
    <div className="bg ">
      <div className=" text-white glass mx-[5%] mt-[5%]">
        <p className="p-8 text-5xl font-semibold">Important Links</p>
        <div className="flex justify-around py-20">
          <a
            href="/"
            className="linkBox grid items-center justify-items-center"
          >
            <img
              src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650980/sponsor_c9qjhd.png"
              alt=""
              className="h-48"
            />
            <p className="text-3xl">Sponsor Us</p>
          </a>
          <a
            href="/"
            className="linkBox grid items-center justify-items-center"
          >
            <img
              src="https://res.cloudinary.com/dzbax077h/image/upload/v1657651549/community_nlklrw.png"
              alt=""
              className="h-48"
            />
            <p className="text-3xl">Partner With Us</p>
          </a>
          <a
            href="/"
            className="linkBox grid items-center justify-items-center"
          >
            <img
              src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650980/sponsor_c9qjhd.png"
              alt=""
              className="h-48"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
