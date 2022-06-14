import MedicationCard from "./MedicationCard";

import { useState, useEffect } from "react";

export default function CardCarousel({ medications }) {
  return (
    <div className="container-carousel">
      {!medications ? (
        <h2>Loading...</h2>
      ) : (
        medications?.map((medication) => (
          <MedicationCard medication={medication} key={medication.id} />
        ))
      )}
    </div>
  );
} //insert another title or header 'Commonly used medications
