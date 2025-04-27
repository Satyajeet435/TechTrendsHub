import React, { useState } from "react";
import { phones } from "../data";
import { motion } from "framer-motion";
import "./PhoneComparison.css";

const PhoneComparison = () => {
  const [selectedPhones, setSelectedPhones] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
  const [ramFilter, setRamFilter] = useState("All");

  const handleSelect = (phone) => {
    if (selectedPhones.includes(phone)) {
      setSelectedPhones(selectedPhones.filter((p) => p !== phone));
    } else {
      setSelectedPhones([...selectedPhones, phone]);
    }
  };

  const filteredPhones = phones.filter((phone) => {
    return (
      (brandFilter === "" || phone.brand === brandFilter) &&
      (priceFilter === "All" ||
        (priceFilter === "Below 50K" && parseInt(phone.price.amazon.replace(/\D/g, "")) < 50000) ||
        (priceFilter === "50K - 1L" &&
          parseInt(phone.price.amazon.replace(/\D/g, "")) >= 50000 &&
          parseInt(phone.price.amazon.replace(/\D/g, "")) <= 100000) ||
        (priceFilter === "Above 1L" && parseInt(phone.price.amazon.replace(/\D/g, "")) > 100000)) &&
      (ramFilter === "All" || phone.ram === ramFilter)
    );
  });

  return (
    <div className="container">
      <h2>Smartphone Comparison</h2>
      <div className="filters">
        <select onChange={(e) => setBrandFilter(e.target.value)}>
          <option value="">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="OnePlus">OnePlus</option>
        </select>
        <select onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="All">All Prices</option>
          <option value="Below 50K">Below ₹50,000</option>
          <option value="50K - 1L">₹50,000 - ₹1,00,000</option>
          <option value="Above 1L">Above ₹1,00,000</option>
        </select>
        <select onChange={(e) => setRamFilter(e.target.value)}>
          <option value="All">All RAM</option>
          <option value="8GB">8GB</option>
          <option value="12GB">12GB</option>
          <option value="16GB">16GB</option>
        </select>
      </div>
      <div className="phone-list">
        {filteredPhones.map((phone) => (
          <motion.div
            key={phone.id}
            className={`phone-card ${selectedPhones.includes(phone) ? "selected" : ""}`}
            onClick={() => handleSelect(phone)}
            whileHover={{ scale: 1.05 }}
          >
            <img src={phone.image} alt={phone.name} />
            <h3>{phone.name}</h3>
            <p>{phone.brand}</p>
            <p>Amazon: {phone.price.amazon}</p>
            <p>Flipkart: {phone.price.flipkart}</p>
          </motion.div>
        ))}
      </div>
      {selectedPhones.length > 0 && (
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Specification</th>
              {selectedPhones.map((phone) => (
                <th key={phone.id}>{phone.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Display</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.display}</td>
              ))}
            </tr>
            <tr>
              <td>Processor</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.processor}</td>
              ))}
            </tr>
            <tr>
              <td>Camera</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.camera}</td>
              ))}
            </tr>
            <tr>
              <td>Battery</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.battery}</td>
              ))}
            </tr>
            <tr>
              <td>RAM</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.ram}</td>
              ))}
            </tr>
            <tr>
              <td>Storage</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.storage}</td>
              ))}
            </tr>
            <tr>
              <td>OS</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.os}</td>
              ))}
            </tr>
            <tr>
              <td>Charging</td>
              {selectedPhones.map((phone) => (
                <td key={phone.id}>{phone.charging}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PhoneComparison;
