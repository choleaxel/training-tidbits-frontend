import MedicationCard from "./MedicationCard";

import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

export default function CardCarousel() {
  const [medications, setMedications] = useState();
  useEffect(() => {
    // fetch the API
    fetch("https://training-tidbits-db.web.app/medications")
      .then((response) => response.json())
      .then((data) => setMedications(data))
      .catch(console.error);
  }, []);
  return (
    <section style={{ marginTop: "60px" }}>
      <Row>
        {!medications ? (
          <h2>Loading...</h2>
        ) : (
          medications.map((medication) => (
            <MedicationCard medication={medication} key={medication.id} />
          ))
        )}
      </Row>
    </section>
  );
}

//   return (
//     <div class="container-fluid py-2">
//       <Carousel>
//         <div class="d-flex flex-row flex-nowrap">
//           <div class="card card-block">Card{/* <MedicationCard /> */}</div>
//           <div class="card card-block">Card{/* <MedicationCard /> */}</div>
//           <div class="card card-block">Card{/* <MedicationCard /> */}</div>
//           <div class="card card-block">Card{/* <MedicationCard /> */}</div>
//           <div class="card card-block">Card{/* <MedicationCard /> */}</div>
//         </div>
//       </Carousel>
//     </div>
//   );
// }

{
  /* <div class="d-flex flex-row flex-nowrap overflow-auto">
  <div class="card card-block mx-2" style="min-width: 300px;">
    Card
  </div>
  <div class="card card-block mx-2" style="min-width: 300px;">
    Card
  </div>
  <div class="card card-block mx-2" style="min-width: 300px;">
    Card
  </div>
</div>; */
}
