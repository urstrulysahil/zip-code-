import React, { useState } from "react";
import "../style.css";

const ZipCodeForm = ({ onFormSubmit }) => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(zipCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="heading">Enter Postal Code:</h2>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ZipCodeForm;
