import "./style.css";
import ProfileDrawer from "../../components/ProfileDrawer/ProfileDrawer";

export default function AllPlants() {
  const plants = [
    { id: 1, name: "Aloe Vera", reminder: "Water every 3 days" },
    { id: 2, name: "Basil", reminder: "Keep near sunlight" },
  ];

  return (
    <div className="plants-container">
      <ProfileDrawer />
      <div className="main-content">
        <h2>🌱 Your Plants</h2>
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <h4>{plant.name}</h4>
            <p>{plant.reminder}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
