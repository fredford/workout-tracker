import React, { useState, useEffect } from "react";
import ListWeights from "./ListWeights";

import services from "../../../../services/services";
import Section from "../../../../components/Misc/Section";
import StatsLineChart from "../../../../components/Stats/StatsLineChart";
import Card from "../../../../components/Cards/Card";

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
      <Section.Body className="d-flex flex-row large-gap">
        <ListWeights weights={weights} setWeights={setWeights} />
        <Card className="w-100">
          <Card.Body>
            <StatsLineChart data={chartData} options={"standard"} show={data !== {}} />
          </Card.Body>
        </Card>
      </Section.Body>
    </Section>
  );
};

export default SectionWeights;
