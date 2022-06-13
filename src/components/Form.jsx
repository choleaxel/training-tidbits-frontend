import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMedication() {
  let navigate = useNavigate();

  const [newMedication, setNewMedication] = useState({
    name: "",
    uses: "",
    contraindication: "",
    feline: false,
    canine: false,
    category: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://training-tidbits-db.web.app/medications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedication),
    })
      .then(() => navigate("/Home"))
      .then(alert("Medication Added"))
      .catch(setError);
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewMedication({
      ...newMedication,
      [e.target.name]: newValue,
    });
  };
  return (
    <section style={{ margin: "2em 1em" }}>
      <h1> Add New Medication </h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label for="name">
          Name:
          <input
            name="name"
            type="text"
            value={newMedication.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="uses">
          Uses:
          <input
            name="uses"
            type="text"
            value={newMedication.uses}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="contraindication">
          Contraindication:
          <input
            name="contraindication"
            type="text"
            value={newMedication.contraindication}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="category">
          Category:
          <input
            name="category"
            type="text"
            value={newMedication.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="canine">
          For Canine Use? :
          <input
            name="canine"
            type="checkbox"
            value={newMedication.canine}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="feline">
          For Feline Use? :
          <input
            name="feline"
            type="checkbox"
            value={newMedication.feline}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" onClick={() => handleSubmit()}>
          Submit New Medication
        </button>
      </form>
    </section>
  );
} //still need to add boolean check boxes for species
//drop down for medication category?
