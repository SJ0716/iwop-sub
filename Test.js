import React from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  return <div>id is {id}</div>;
};

export default Test;
