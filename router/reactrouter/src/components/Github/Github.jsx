import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
  // const [data, setData] = useState(4);
  const data = useLoaderData()
  // useEffect(() => {
  //   fetch("https://api.github.com/users/yogeshprakhar")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl justify-center flex flex-col flex-grow ">
      Github followers: {data.followers}
      <div className="flex justify-evenly">
        <img
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
          style={{ borderRadius: 200 }}
        />
        <div>
          <p className="m-20">Yogesh Prakhar</p>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async()=>{
  const response = await fetch("https://api.github.com/users/yogeshprakhar")
  return response.json()
}
