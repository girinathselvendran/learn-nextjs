// var Latex = require("react-latex");
// import Latex from "react-latex";
import { BlockMath, InlineMath } from "react-katex";

export default function Profile() {
  return (
    <div>
      <h2>LaTeX Example:</h2>
      <BlockMath math="\frac{-b \pm \sqrt{b^2-4 a c}}{2 a}" />
      <img src="https://cdn.mathpix.com/snip/images/pFliEOBvLufS20P9VjsDefFfE5j-jULWLZqiamXaarc.original.fullsize.png" />
    </div>
  );
}
