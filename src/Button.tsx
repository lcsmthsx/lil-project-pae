import React from "react";

function Button({children,clicked}:any,){
  return (
    <button onClick={clicked}>{children}</button>
  )
  
}

export default Button;
