import React, { useState } from "react";
import "./SmartphoneComparison.css"; // Create this file for styling

const smartphones = [
  {
    name: "iPhone 15 Pro",
    img: "https://m.media-amazon.com/images/I/81XvGbBFNhL._SL1500_.jpg",
    display: "6.1-inch OLED",
    processor: "A17 Pro",
    camera: "48MP",
    battery: "3274mAh",
    ram: "8GB",
    storage: "256GB",
    os: "iOS 17",
    charging: "20W",
    link: "https://www.amazon.in/dp/B0CHX1T4YC",
  },
  {
    name: "Samsung S24 Ultra",
    img: "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
    display: "6.8-inch AMOLED",
    processor: "Snapdragon 8 Gen 3",
    camera: "200MP",
    battery: "5000mAh",
    ram: "12GB",
    storage: "512GB",
    os: "Android 14 (One UI)",
    charging: "45W",
    link: "https://www.amazon.in/dp/B0BTY4RC57",
  },
  {
    name: "OnePlus 12",
    img: "https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg",
    display: "6.7-inch AMOLED",
    processor: "Snapdragon 8 Gen 3",
    camera: "50MP",
    battery: "5400mAh",
    ram: "16GB",
    storage: "256GB",
    os: "Android 14 (OxygenOS)",
    charging: "100W",
    link: "https://www.amazon.in/dp/B0CHX6Z9WR",
  },
];

const SmartphoneComparison = () => {
  const [selectedPhones, setSelectedPhones] = useState([]);

  const handleCheckboxChange = (phone) => {
    setSelectedPhones((prevSelected) =>
      prevSelected.includes(phone)
        ? prevSelected.filter((item) => item !== phone)
        : [...prevSelected, phone]
    );
  };

  return (
    <div className="container">
      <h1>Smartphones - TechTrendsHub</h1>
      <h2>Select Smartphones to Compare</h2>
      <div className="phone-list">
        {smartphones.map((phone) => (
          <div key={phone.name} className="phone-item">
            <img src={phone.img} alt={phone.name} />
            <label>
              <input
                type="checkbox"
                checked={selectedPhones.includes(phone)}
                onChange={() => handleCheckboxChange(phone)}
              />
              {phone.name}
            </label>
          </div>
        ))}
      </div>

      {selectedPhones.length > 0 && (
        <>
          <h2>Compare Smartphones</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Specification</th>
                {selectedPhones.map((phone) => (
                  <th key={phone.name}>
                    <img src={phone.img} alt={phone.name} width="80" />
                    <br />
                    {phone.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["display", "processor", "camera", "battery", "ram", "storage", "os", "charging"].map(
                (spec) => (
                  <tr key={spec}>
                    <td>{spec.charAt(0).toUpperCase() + spec.slice(1)}</td>
                    {selectedPhones.map((phone) => (
                      <td key={phone.name}>{phone[spec]}</td>
                    ))}
                  </tr>
                )
              )}
              <tr>
                <td>Buy</td>
                {selectedPhones.map((phone) => (
                  <td key={phone.name}>
                    <a href={phone.link} target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SmartphoneComparison;
