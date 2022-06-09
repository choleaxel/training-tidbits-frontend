import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function MedicationCard({ medication }) {
  const [medications, setMedications] = useState();
  useEffect(() => {
    fetch("https://training-tidbits-db.web.app/medications")
      .then((res) => res.json())
      .then((data) => setMedications(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{`${medication.name}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Common Uses: {`${medication.uses}`}
        </Card.Subtitle>
        <Card.Text>
          Contraindications: {`${medication.contraindication}`}
        </Card.Text>
        <Card.Text>Medication Category: {`${medication.category}`}</Card.Text>
        <Card.Text>🐶 :{medication.canine ? "✅" : "❎"}</Card.Text>
        <Card.Text>🐱 :{medication.feline ? "✅" : "❎"}</Card.Text>
      </Card.Body>
    </Card>
  );
}
