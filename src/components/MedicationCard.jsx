import React from "react";
import dogImage from "../Assets/dog-solid.svg";
import catImage from "../Assets/cat-solid.svg";

export default function MedicationCard({ medication }) {
  return (
    // <div class="card-row">
    <div className="card-body">
      <p className="card-header">{`${medication?.name}`}</p>
      <p className="card-uses">Common Uses: {`${medication?.uses}`}</p>
      <p class="card-category">
        Medication Category: {`${medication?.category}`}
      </p>
      <p className="card-contra">
        Contraindications: {`${medication?.contraindication}`}
      </p>
      <p className="card-species">
        {medication?.canine ? (
          <img src={dogImage} alt="dog icon" title="Canine" />
        ) : (
          ""
        )}
        {medication?.feline ? (
          <img src={catImage} alt="cat icon" title="Feline" />
        ) : (
          ""
        )}
      </p>
    </div>
    // </div>
  );
}
