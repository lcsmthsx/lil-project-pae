import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Icon from "./Icon";
import Icon3 from "./IconThree"
import Icon2 from "./IconTwo";
import ColoredSquare from "./ColoredSquare";

function App(){
  const [color, setColor]= 
  useState("grey")

  return( <div>
    <ColoredSquare color={color}/>
            <Button clicked={()=>setColor("black")} >
              <Icon />
              <p>BLACK</p>
            </Button>
            <Button clicked={()=>setColor("red")} >
              <Icon2 />
              <p>RED</p>
            </Button>
            <Button clicked={()=>setColor("blue")}>
              <Icon3 />
              <p>BLUE</p>
            </Button>
          </div>
        );
}

ReactDOM.render(<App />, document.getElementById("root"));
