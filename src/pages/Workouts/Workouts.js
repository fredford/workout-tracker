import React from "react";
import Page from "../Page/Page";
import Card from "../../components/cards/Card";
import Progression from "./Progression/Progression";

export default function Workouts() {
  return (
    <Page>
      <div className="row mt-3">
        <div className="col-md-6 align-items-stretch">
          <div className="row">
            <div className="col-md-12 stretch-card mb-3">
              <Card>
                <h4>Plans</h4>
                Show a list of scheduled plans here
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

            <div className="col-md-12 stretch-card">
              <Card>
                <h4>Progression</h4>
                <Progression />
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-6 card-stretch">
          <Card>
            <h4>Workout History</h4>
          </Card>
        </div>
      </div>
    </Page>
  );
}
