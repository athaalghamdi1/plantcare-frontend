import Navbar from "../../components/Navbar/Navbar";

export default function AllPlants() {
  const plants = [
    { id: 1, name: "Aloe Vera", reminder: "Water every 3 days" },
    { id: 2, name: "Basil", reminder: "Keep near sunlight" },
  ];

  return (
    <>
      <Navbar />
      <div className="plants-container">
        <h2>🌿 Your Plants</h2>
        {plants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <h3>{plant.name}</h3>
            <p>{plant.reminder}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
