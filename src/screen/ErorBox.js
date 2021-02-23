import React from "react";

export default function ErorBox(props) {
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}
