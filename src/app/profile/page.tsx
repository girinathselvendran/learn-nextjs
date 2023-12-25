"use client";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

export default function Profile() {
  const [value, setValue] = useState("");

  return (
    <div className="text-center">
      <h2>LaTeX Example:</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <br />
      <br />
      {/* <BlockMath math="\frac{-b \pm \sqrt{b^2-4 a c}}{2 a}" /> */}
      <BlockMath math={value} />



      {/* <img src="https://cdn.mathpix.com/snip/images/pFliEOBvLufS20P9VjsDefFfE5j-jULWLZqiamXaarc.original.fullsize.png" /> */}
    </div>
  );
}
