import React from "react";
import "../style.css"
const LocationInfo = ({ location, isLoading, error, onClear }) => {
  return (
    <div>
      <h2>Location Information</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {location && (
        <div>
          <p>Country: {location.country}</p>
          <p>State: {location.state}</p>
          <p>Place Name: {location.placeName}</p>
        </div>
      )}
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default LocationInfo;
