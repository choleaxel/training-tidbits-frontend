import React, { useState, useEffect } from "react";

export default function MedicationCard({ medication }) {
  return (
    <div class="card-row">
      <div class="card-body">
        <p class="card-header">{`${medication?.name}`}</p>
        <p class="card-uses">Common Uses: {`${medication?.uses}`}</p>
        <p class="card-category">
          Medication Category: {`${medication?.category}`}
        </p>
        <p class="card-contra">
          Contraindications: {`${medication?.contraindication}`}
        </p>
        <p class="species">
          🐶 :{medication?.canine ? "✅" : "❎"} 🐱 :
          {medication?.feline ? "✅" : "❎"}
        </p>
      </div>
    </div>
  );
}
