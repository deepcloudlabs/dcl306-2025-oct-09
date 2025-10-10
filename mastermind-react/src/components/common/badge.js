import React from "react";

export default function Badge({isVisible=true,label,value,color}) {
    return (
        <>
           { isVisible && (<h4>{label}: <span className={"badge ".concat(color)}>{value}</span></h4>)}
        </>
    );
}