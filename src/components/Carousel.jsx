import MedicationCard from "./MedicationCard";

export default function CardCarousel() {
  return (
    <div class="container-fluid">
      <div class="row flex-row flex-nowrap">
        <div class="col-3">
          <div class="card card-block">
            <MedicationCard />
          </div>
          <div class="card card-block">
            <MedicationCard />
          </div>
          <div class="card card-block">
            <MedicationCard />
          </div>
          <div class="card card-block">
            <MedicationCard />
          </div>
          <div class="card card-block">
            <MedicationCard />
          </div>
        </div>
      </div>
    </div>
  );
}
