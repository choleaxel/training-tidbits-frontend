import MedicationCard from "./MedicationCard";

import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

export default function CardCarousel() {
  const [medications, setMedications] = useState();
  useEffect(() => {
    fetch("https://training-tidbits-db.web.app/medications")
      .then((response) => response.json())
      .then((data) => setMedications(data))
      .catch(console.error);
  }, []);
  return (
    <div class="container-fluid">
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
        <Row class="col-5">
          {!medications ? (
            <h2>Loading...</h2>
          ) : (
            medications.map((medication) => (
              <MedicationCard medication={medication} key={medication.id} />
            ))
          )}
        </Row>
      </div>
    </div>
  );
} //still not scrolling

//   const [medications, setMedications] = useState();
//   useEffect(() => {
//     // fetch the API
//     fetch("https://training-tidbits-db.web.app/medications")
//       .then((response) => response.json())
//       .then((data) => setMedications(data))
//       .catch(console.error);
//   }, []);
//   return (
//     <section style={{ marginTop: "60px" }}>
//       <Row className="row row-horizon">
//         {!medications ? (
//           <h2>Loading...</h2>
//         ) : (
//           medications.map((medication) => (
//             <MedicationCard medication={medication} key={medication.id} />
//           ))
//         )}
//       </Row>
//     </section>
//   );
// }  //this works but is not scrollable

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
