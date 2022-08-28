// Library imports
import React, { useState, useEffect } from "react";
// Local Components
import { AddWeight } from "./Profile/components/AddWeight";
import { AddSteps } from "./Profile/components/AddSteps";
import ListWeights from "./Profile/components/ListWeights";
import ListSteps from "./Profile/components/ListSteps";

// Local utilities
import services from "../../services/services";

export function Weights() {
  const [weights, setWeights] = useState([]);
  const [weight, setWeight] = useState(0);
  const [dateWeight, setDateWeight] = useState(new Date());
  const [stepsList, setStepsList] = useState([]);
  const [steps, setSteps] = useState(0);
  const [dateSteps, setDateSteps] = useState(new Date());

  useEffect(() => {
    retrieveData();
  }, [weights.length, stepsList.length]);

  const retrieveData = async () => {
    await services.weight.getAll(setWeights);
    await services.steps.getAll(setStepsList);
  };

  const addWeight = async () => {
    const newWeight = { date: dateWeight, amount: weight };
    await services.weight.createWeight(newWeight);
    setWeight(weights.push(newWeight));
  };
  const addSteps = async () => {
    const newSteps = { date: dateSteps, amount: steps };
    await services.steps.createSteps(newSteps);
    setSteps(stepsList.push(newSteps));
  };

  return (
    <div className="d-flex flex-row large-gap">
      <AddWeight
        weight={weight}
        setWeight={setWeight}
        date={dateWeight}
        setDate={setDateWeight}
        addWeight={addWeight}
      />
      <ListWeights weights={weights} setWeights={setWeights} />
      <AddSteps
        steps={steps}
        setSteps={setSteps}
        date={dateSteps}
        setDate={setDateSteps}
        addSteps={addSteps}
      />
      <ListSteps stepsList={stepsList} setStepsList={setStepsList} />
    </div>
  );
}
