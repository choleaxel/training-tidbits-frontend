import { Card } from "react-bootstrap";

export default function MedicationCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Medication Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Category</Card.Subtitle>
        <Card.Text>Uses and contraindications?</Card.Text>
        <Card.Link href="#">More Info</Card.Link>
      </Card.Body>
    </Card>
  );
}
