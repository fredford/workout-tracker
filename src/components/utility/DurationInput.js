import React, { useState } from "react";

const DurationInput = ({ currentDuration, updateDuration }) => {
  const [duration, setDuration] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
  });

  const changeDuration = (e) => {
    var newSetTime = Object.assign({}, duration);

    switch (e.target.name) {
      case "gps-hh":
        newSetTime.hh = e.target.value;
        setDuration(newSetTime);
        break;
      case "gps-mm":
        newSetTime.mm = e.target.value;
        setDuration(newSetTime);
        break;
      case "gps-ss":
        newSetTime.ss = e.target.value;
        setDuration(newSetTime);
        break;

      default:
        console.log("Error");
    }
    setDuration(newSetTime);
    updateDuration(newSetTime);
  };

  return (
    <div className="d-flex flex-row">
      <input
        className="default-input time-input"
        placeholder="HH"
        type="number"
        name="gps-hh"
        value={currentDuration.hh}
        onChange={changeDuration}
      />

      <p className="pt-2">:</p>
      <input
        className="default-input time-input"
        placeholder="MM"
        type="number"
        name="gps-mm"
        value={currentDuration.mm}
        onChange={changeDuration}
      />

      <p className="pt-2">:</p>
      <input
        className="default-input time-input"
        placeholder="SS"
        type="number"
        name="gps-ss"
        value={currentDuration.ss}
        onChange={changeDuration}
      />
    </div>
  );
};

export default DurationInput;
