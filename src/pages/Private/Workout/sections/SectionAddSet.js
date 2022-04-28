import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";

const SectionAddSet = ({ exercises, newExercise, setNewExercise }) => {
  return (
    <Section>
      <Section.Header>Add</Section.Header>
      <Section.Body>
        <Card>
          <Card.Body>
            <Card.Title>Exercise</Card.Title>
            <Card.Subtitle className="text-muted">
              Choose an exercise to add to the workout
            </Card.Subtitle>
            <div className="row">
              {React.Children.toArray(
                exercises.map((exercise) => {
                  return (
                    <div
                      className="col-2 card"
                      onClick={() => setNewExercise(exercise)}
                    >
                      <h5>{exercise.name}</h5>
                      <h6 className="text-muted">{exercise.type}</h6>
                    </div>
                  );
                })
              )}
            </div>
          </Card.Body>
        </Card>
      </Section.Body>
    </Section>
  );
};

export default SectionAddSet;
