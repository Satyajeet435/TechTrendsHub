import React, { useState } from "react";
import { phones } from "../data";

const PhoneSelection = ({ onCompare }) => {
  const [selectedPhones, setSelectedPhones] = useState([]);

  const handleSelection = (phone) => {
    let updatedSelection = [...selectedPhones];
    if (updatedSelection.includes(phone)) {
      updatedSelection = updatedSelection.filter((p) => p !== phone);
    } else if (updatedSelection.length < 3) { // Limit to 3 phones
      updatedSelection.push(phone);
    }
    setSelectedPhones(updatedSelection);
    onCompare(updatedSelection);
  };

  return (
    <div>
      <h2>Select Smartphones to Compare</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {phones.map((phone) => (
          <div key={phone.id} style={{ textAlign: "center" }}>
            <img src={phone.image} alt={phone.name} width="120" />
            <br />
            <input
              type="checkbox"
              checked={selectedPhones.includes(phone)}
              onChange={() => handleSelection(phone)}
            />
            {phone.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneSelection;
