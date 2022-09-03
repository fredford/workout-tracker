import React, { useEffect, useState } from "react";
import StatsLineChart from "../../../../components/Stats/StatsLineChart";
import ListSteps from "./ListSteps";

import services from "../../../../services/services";
import BasicCard from "../../../../components/Cards/BasicCard";
import Section from "../../../../components/Misc/Section";

const SectionSteps = () => {
  const [stepsList, setStepsList] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    retrieveData();
  }, [stepsList.length]);

  const retrieveData = async () => {
    const newData = {};
    await services.steps.getAll(setStepsList);
    stepsList.forEach((steps) => (newData[new Date(steps.date).toDateString()] = steps.amount));
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
      <Section.Header>Steps</Section.Header>
      <Section.Body className="weight-steps__section">
        <BasicCard className="weight-steps__chart">
          <StatsLineChart data={chartData} options={"no-aspect-zero"} show={data !== {}} />
        </BasicCard>
        <div className="weight-steps__list-container">
          <ListSteps stepsList={stepsList} setStepsList={setStepsList} />
        </div>
      </Section.Body>
    </Section>
  );
};

export default SectionSteps;
