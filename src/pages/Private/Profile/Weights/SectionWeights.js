import React, { useState, useEffect } from "react";
import ListWeights from "./ListWeights";

import services from "../../../../services/services";
import Section from "../../../../components/Misc/Section";
import StatsLineChart from "../../../../components/Stats/StatsLineChart";
import BasicCard from "../../../../components/Cards/BasicCard";

const SectionWeights = () => {
  const [weights, setWeights] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    retrieveData();
  }, [weights.length]);

  const retrieveData = async () => {
    const newData = {};
    await services.weight.getAll(setWeights);
    weights.forEach((weight) => (newData[new Date(weight.date).toDateString()] = weight.amount));

    setData(newData);
  };

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Workout",
        data: Object.values(data),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  return (
    <Section>
      <Section.Header>Weights</Section.Header>
      <Section.Body className="weight-steps__section">
        <div className="weight-steps__list-container">
          <ListWeights weights={weights} setWeights={setWeights} />
        </div>
        <BasicCard className="weight-steps__chart">
          <StatsLineChart data={chartData} options={"no-aspect-no-zero"} show={data !== {}} />
        </BasicCard>
      </Section.Body>
    </Section>
  );
};

export default SectionWeights;
