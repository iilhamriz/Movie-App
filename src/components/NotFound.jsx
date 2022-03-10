import React from "react";

const NotFound = ({ type }) => {
  return (
    <div style={{ marginTop: 150 }}>
      <h2>{type ? "TV Series" : "Movie"} NotFound</h2>
    </div>
  );
};

export default NotFound;
