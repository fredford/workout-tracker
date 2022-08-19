import React, { Fragment } from "react";

import Navbar from "../../Misc/Navbar/Navbar";

const Page = ({ container, className, center, navbar, children }) => {
  let pageClassName = "page ";
  pageClassName += center ? "center-page" : "";
  let pageBodyClassName = "page-body ";
  pageBodyClassName += container ? "container " : "";
  pageBodyClassName += className ? className : "";
  //pageBodyClassName += center ? " center-page " : "";

  let pageLayoutClassName = navbar ? "normal-page" : "center-page";

  return (
    <Fragment>
      {/* Full page container}*/}
      <div className={pageClassName}>
        {/* Navbar container*/}
        {navbar ? <Navbar /> : <></>}
        {/* Page body container */}
        <div className={pageLayoutClassName}>
          {/* Content container */}
          <div className={pageBodyClassName}>{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
