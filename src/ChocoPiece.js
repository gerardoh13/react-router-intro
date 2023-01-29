import React, { useState } from "react";

const ChocoPiece = () => {
const [visible, setVisible] = useState(true)

let hide = visible ? "" : "hidden"

  return (

          <td className={`ChocoPiece ${hide}`} onClick={() => setVisible(false)}/>

  );
};

export default ChocoPiece;
