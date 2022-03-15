import React from "react";
import { useParams } from "react-router-dom";
import Page from "../Page/Page";

const Sets = () => {
  let { workoutId } = useParams();
  return (
    <Page>
      <h1>{workoutId}</h1>
    </Page>
  );
};

export default Sets;
