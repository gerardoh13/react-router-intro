import React from "react";

const Cat = ({y, x}) => {
  return (
    <div
      class="cat"
      style={{
        top: `${y}vh`,
        left: `${x}vw`,
      }}
    >
      <div class="face">
        <div class="eye eye-left">
          <div class="eye-pupil"></div>
        </div>
        <div class="eye eye-right">
          <div class="eye-pupil"></div>
        </div>
        <div class="muzzle"></div>
      </div>
    </div>
  );
};

export default Cat;
