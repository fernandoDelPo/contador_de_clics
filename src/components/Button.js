import React from "react";
import '../assets/stylesheets/Buttons.css';


function Button({text, buttonClick, assignClick}){
  return (
    <button 
    className={buttonClick ? 'class-click' : 'class-reset'}
    onClick={assignClick}>
      {text}
    </button>
  );

}
export default Button;