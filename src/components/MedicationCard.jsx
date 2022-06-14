import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import dogImage from "../Assets/dog-solid.svg";
import catImage from "../Assets/cat-solid.svg";

export default function MedicationCard({ medication }) {
  return (
    // <div class="card-row">
    <div class="card-body">
      <p class="card-header">{`${medication?.name}`}</p>
      <p class="card-uses">Common Uses: {`${medication?.uses}`}</p>
      <p class="card-category">
        Medication Category: {`${medication?.category}`}
      </p>
      <p class="card-contra">
        Contraindications: {`${medication?.contraindication}`}
      </p>
      <p className="card-species">
        {medication?.canine ? <img src={dogImage} /> : ""}
        {medication?.feline ? <img src={catImage} /> : ""}
      </p>
    </div>
    // </div>
  );
}

//extra: use actual svg icons/images for the dog and cat
//   <FontAwesomeIcon icon="fa-solid fa-dog" />
