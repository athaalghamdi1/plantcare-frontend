import React, { useEffect, useState } from "react";

export default function SmartReminders() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetch("/api/due-reminders/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReminders(data))
      .catch((err) => console.error(err));
  }, []);

  const markAsWatered = (plantId) => {
    const today = new Date().toISOString().slice(0, 10);
    fetch(`/api/plants/${plantId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify({ last_watered: today }),
    })
      .then(() => {
        setReminders((prev) => prev.filter((p) => p.id !== plantId));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Smart Reminders</h2>
      {reminders.map((plant) => (
        <div
          key={plant.id}
          className="bg-red-100 p-4 rounded shadow mb-3 flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{plant.name} needs watering 💧</p>
            <p className="text-sm text-gray-600">
              Last watered: {plant.last_watered}
            </p>
          </div>
          <button
            onClick={() => markAsWatered(plant.id)}
            className="bg-green-200 px-3 py-1 rounded hover:bg-green-300"
          >
            Mark as watered
          </button>
        </div>
      ))}
    </div>
  );
}
