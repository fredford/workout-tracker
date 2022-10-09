import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Buttons/Button";
import BasicCard from "../../../../components/Cards/BasicCard";
import services from "../../../../services/services";
import AddStepsModal from "./AddStepsModal";

const ListSteps = ({ stepsList, setStepsList }) => {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(0);
  const [numPages, setNumPages] = useState(0);

  const deleteSteps = async (steps, index) => {
    await services.steps.removeSteps(steps._id);
    setStepsList(stepsList.splice(index, 1));
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    setPage(0);
    setNumPages(Math.floor(stepsList.length / 7));
  }, [stepsList.length]);

  let displayList = [...stepsList];

  displayList.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (displayList.length > 7) {
    displayList = displayList.slice(page * 7, page * 7 + 7);
  }

  // Increase the current page number
  const increasePage = () => {
    var newPage = page;

    if (stepsList.length > 7) {
      setPage(++newPage);
    }
  };
  // Decrease the current page number to a minimum of zero
  const decreasePage = () => {
    var newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
  };

  return (
    <BasicCard className="w-100 h-100" title="History">
      <div className="weight-steps__card-container">
        <div className="weight-steps__list">
          {displayList.map((steps, index) => {
            const date = new Date(steps.date);
            return (
              <div key={steps._id} className="weight-steps__list-item">
                <p className="">{date.toDateString()}</p>
                <p className="">{steps.amount}</p>
                <MdOutlineCancel
                  size={25}
                  className="workout-sets-repetitions__set-button"
                  onClick={() => deleteSteps(steps, index)}
                />
              </div>
            );
          }) ?? <></>}
        </div>

        <div className="weight-steps__add">
          <div className="d-flex flex-row justify-content-center large-gap">
            {page > 0 ? <Button iconOnly Icon={FaArrowLeft} onClick={decreasePage} /> : <></>}
            {numPages > 0 ? <Button iconOnly Icon={FaArrowRight} onClick={increasePage} /> : <></>}
          </div>
          <AddStepsModal
            show={showModal}
            handleClose={handleClose}
            stepsList={stepsList}
            setStepsList={setStepsList}
          />
          <Button fill onClick={handleShow} className="ms-4">
            Add
          </Button>
        </div>
      </div>
    </BasicCard>
  );
};

export default ListSteps;
