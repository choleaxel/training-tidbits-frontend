import CardCarousel from "./Carousel";
import { useState, useEffect } from "react";

export default function Home({ medication }) {
  const [medications, setMedications] = useState();
  useEffect(() => {
    fetch("https://training-tidbits-db.web.app/medications")
      .then((res) => res.json())
      .then((data) => setMedications(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <CardCarousel medications={medications} />
    </div>
  );
}
