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
      .then(() => navigate("/"))
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
    <section className="form-section">
      <h1 className="form-title"> Add New Medication </h1>
      <h3 className="form-required"> All fields required </h3>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label className="form-labels" for="name">
          Name:
          <input
            className="input-box"
            name="name"
            type="text"
            value={newMedication.name}
            onChange={handleChange}
            required="true"
          />
        </label>
        <br />
        <label className="form-labels" for="uses">
          Uses:
          <input
            className="input-box"
            name="uses"
            type="text"
            value={newMedication.uses}
            onChange={handleChange}
            required="true"
          />
        </label>
        <br />
        <label className="form-labels" for="contraindication">
          Contraindication:
          <input
            className="input-box"
            name="contraindication"
            type="text"
            value={newMedication.contraindication}
            onChange={handleChange}
            required="true"
          />
        </label>
        <br />
        <label className="form-labels" for="category">
          Category:
          <input
            className="input-box"
            name="category"
            type="text"
            value={newMedication.category}
            onChange={handleChange}
            required="true"
          />
        </label>
        <br />
        <label className="form-labels" for="canine">
          For Canine Use :
          <input
            name="canine"
            type="checkbox"
            class="larger"
            value={newMedication.canine}
            onChange={handleChange}
            required="true"
          />
        </label>
        <label className="form-labels" for="feline">
          For Feline Use :
          <input
            name="feline"
            type="checkbox"
            class="larger"
            value={newMedication.feline}
            onChange={handleChange}
            required="true"
          />
        </label>
        <br />
        <button
          className="btn-newmed"
          type="submit"
          onClick={() => handleSubmit()}
        >
          Submit New Medication
        </button>
      </form>
    </section>
  );
} //still need to add boolean check boxes for species
//drop down for medication category?
