import React, { useState } from "react";
import "../styles/pest-control.css";

const pests = [
  { id: 1, name: "Aphids", damage: "Sucks plant sap, causing curling leaves.", solution: "Use neem oil or ladybugs." },
  { id: 2, name: "Caterpillars", damage: "Chews leaves and stems.", solution: "Use Bacillus thuringiensis (BT) spray." },
  { id: 3, name: "Whiteflies", damage: "Spreads plant viruses and weakens crops.", solution: "Use insecticidal soap." },
  { id: 4, name: "Spider Mites", damage: "Causes yellowing and leaf drop.", solution: "Use water spray and neem oil." },
  { id: 5, name: "General Pests", damage: "Affects plant health.", solution: "Use Neem Spray for natural protection." },
  { id: 6, name: "Fungal Infections", damage: "Causes wilting and rot.", solution: "Use Ginger Spray as an antifungal remedy." },
];

const PestControl = () => {
  const [selectedPest, setSelectedPest] = useState(null);

  return (
    <section className="pest-control">
      <h2>🐞 Pest Control</h2>
      <p>Identify and manage agricultural pests effectively.</p>

      <div className="pest-list">
        {pests.map((pest) => (
          <div key={pest.id} className="pest-item" onClick={() => setSelectedPest(pest)}>
            <h3>{pest.name}</h3>
          </div>
        ))}
      </div>

      {selectedPest && (
        <div className="pest-details">
          <h3>{selectedPest.name}</h3>
          <p><strong>Damage:</strong> {selectedPest.damage}</p>
          <p><strong>Solution:</strong> {selectedPest.solution}</p>
          <button className="close-btn" onClick={() => setSelectedPest(null)}>❌ Close</button>
        </div>
      )}
    </section>
  );
};

export default PestControl;
