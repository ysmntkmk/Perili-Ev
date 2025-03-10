import React from "react";

export default function HouseCard({ houseData, index, total }) {
  // Otomatik liste oluşturma
  const details = Object.keys(houseData).map((key) => {
    if (key === "image" || key === "id") return null;

    let value = houseData[key];
    if (typeof value === "boolean") {
      value = value ? "Evet" : "Hayır";
    }

    return (
      <li key={key}>
        <span>{key.replace(/([A-Z])/g, " $1") + ":"}</span>
        {value}
      </li>
    );
  });

  return (
    <div className="house-card" key={houseData.id}>
      <p>
        {total} / {index + 1}
      </p>
      <img src={houseData.image} alt="Ev" />
      <div>
        <ul>{details}</ul>
      </div>
    </div>
  );
}