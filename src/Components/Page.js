import React from "react";
import "./bg.css";
import Links from "../assets/Links";

export default function Page() {
  return Links.map((link) => (
    <LinksComponent
      key={link.key}
      title={link.title}
      img={link.img}
    ></LinksComponent>
  ));
}

function LinksComponent({ title, img }) {
  return (
    <div className="bg ">
      <div className=" text-white glass mx-[5%] mt-[5%]">
        <p className="p-8 text-5xl font-semibold">{title}</p>
        <div className="flex justify-around py-20">
          {img.map((img) => (
            <LinksImage
              url={img.url}
              text={img.text}
              href={img.href}
            ></LinksImage>
          ))}
        </div>
      </div>
    </div>
  );
}

function LinksImage({ url, text, href }) {
  return (
    <a href={href} className="linkBox grid items-center justify-items-center">
      <img src={url} alt="" className="h-32" />
      <p className="text-3xl">{text}</p>
    </a>
  );
}
