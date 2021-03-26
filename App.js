import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App({ userName }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(setData);
  }, []);

  if(data){
    return <div>{JSON.stringify(data)}</div>
  }

  return <div>No User Available</div>;
}
