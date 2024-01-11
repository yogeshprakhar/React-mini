import React from "react";

const Drop = () => {
  const arr = ["delhi", "mumbai", "chennai", "kolkata", "hayana"];
  return (
    <div>
      <select name="" id="">
        {arr.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Drop;
