import React from "react";
import { Card, Table } from "react-bootstrap";
import SectionsCard from "../cards/SectionsCard";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function ListExercises() {
  const [isAscending, setIsAscending] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const directionChange = () => {
    setIsAscending(!isAscending);
  };

  const ShowDirection = () => {
    if (isAscending) {
      return <FaChevronUp className="list-exercises__direction" />;
    } else {
      return <FaChevronDown className="list-exercises__direction" />;
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Card className="sections-card list-exercises">
      <SectionsCard name="List" />
      <div className="list-exercises__toggle">
        <input
          id="direction-toggle"
          type="checkbox"
          onChange={directionChange}
          checked={isAscending}
        />
        <label id="label-direction-toggle" htmlFor="direction-toggle">
          <ShowDirection />
        </label>

        <input
          className="list-exercises__search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearch}
        />
      </div>
      <hr />
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Weighted</th>
            <th>Muscles</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Card>
  );
}
