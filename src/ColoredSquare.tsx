import React from "react";

function ColoredSquare({color}:any) {
    const styleSquare = {
        width: "100px",
        height: "100px",
        backgroundColor: color
    };
    
    return <div style= {styleSquare}/>
}
export default ColoredSquare