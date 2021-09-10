import React, {useEffect, useRef, useState } from "react";

export default function Modal(props) {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  useEffect(()=>{
    ref.current.focus();
  })
  return (
    <div className="Modal">
      <input
        style={{ marginTop: "20px" }}
        type="text"
        ref={ref}
        value={value}
        onChange={() => {
          setValue(ref.current.value);
        }}
      />
    </div>
  );
}
