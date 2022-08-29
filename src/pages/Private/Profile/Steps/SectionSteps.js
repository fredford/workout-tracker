import React, { useEffect, useState } from "react";
import StatsLineChart from "../../../../components/Stats/StatsLineChart";
import ListSteps from "./ListSteps";

import services from "../../../../services/services";
import StepsService from "../../../../services/StepsService";
import Card from "../../../../components/Cards/Card";
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
      <Section.Body className="d-flex flex-row large-gap">
        <Card className="w-100">
          <Card.Body className="w-100">
            <StatsLineChart data={chartData} options={"standard"} show={data !== {}} />
          </Card.Body>
        </Card>
        <ListSteps stepsList={stepsList} setStepsList={setStepsList} />
      </Section.Body>
    </Section>
  );
};

export default SectionSteps;
