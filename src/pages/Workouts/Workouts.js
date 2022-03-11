import React from "react";
import Page from "../Page/Page";
import Card from "../../components/cards/Card";
import Progression from "./Progression/Progression";
import Calendar from "react-calendar";

export default function Workouts() {
  return (
    <Page>
      <div className="row mt-3">
        <div className="col-md-6 stretch-card mb-3">
          <Card>
            <h4>Workouts</h4>
            <div className="d-flex flex-row">
              <button className="btn btn-standard w-100 margin-right">
                Start New
              </button>
              <button className="btn btn-standard w-100 margin-left">
                Continue Previous
              </button>
            </div>
          </Card>
        </div>
        <div className="col-md-6 stretch-card mb-3">
          <Card>
            <Calendar />
          </Card>
        </div>
        <div className="col-md-6 stretch-card">
          <Card>
            <h4>Workout History</h4>
          </Card>
        </div>
      </div>
    </Page>
  );
}

const workouts = [
  {
    id: "1283012j1odd10duksd",
    date: "2022/3/10 9:50PM",
    type: "Progression",
  },
  {
    id: "1283012j1odd8f0a9sdfd",
    date: "2022/3/9 9:50PM",
    type: "Single Set Max",
  },
  {
    id: "128fasdjfkla1duksd",
    date: "2022/3/8 9:50PM",
    type: "Light",
  },
];
