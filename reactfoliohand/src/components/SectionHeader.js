import React from "react";
import "../components/SectionHeader.css";

function SectionHeader(props) {
  return (
    <div className="col-lg-9 mb-3 section-header">
      <h2 className="text-center">{props.header}</h2>
    </div>
  );
}

export default SectionHeader;