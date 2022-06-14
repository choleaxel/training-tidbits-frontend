import MedicationCard from "./MedicationCard";

// import { useState, useEffect } from "react";

export default function CardCarousel({ medications }) {
  return (
    <>
      <h2 className="med-carousel-title"> Commonly Used Medications </h2>
      <div className="container-carousel">
        {!medications ? (
          <h3>Loading...</h3>
        ) : (
          medications?.map((medication) => (
            <MedicationCard medication={medication} key={medication.id} />
          ))
        )}
      </div>
    </>
  );
}
