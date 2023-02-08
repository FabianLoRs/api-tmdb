import React from 'react';
import style from "./style.module.css"

const Logo = ({ title, image}) => (
  <div className="style.container">
    <img className={style.img} src={image} alt="logo" />
    <span className={style.title}>{title}</span>
  </div>
);

export default Logo;