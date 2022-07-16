import React from "react";
import "./bg.css";
import Links from "./Links";

export default function Page1() {
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
    <div className="bg">
      <div className=" text-white glass">
        <p className="p-8 text-5xl font-semibold">{title}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
      <img src={url} alt={text} className="h-28 px-4 pt-4" />
      <p className="text-2xl text-center">{text}</p>
    </a>
  );
}