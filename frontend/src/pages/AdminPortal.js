import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminPortal() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/analytics", {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Error fetching analytics:", err));
  }, []);

  const chartData = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: "Appointments per Doctor",
        data: Object.values(stats),
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      }
    ]
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {Object.keys(stats).length > 0 ? (
        <Bar data={chartData} />
      ) : (
        <p>No data available yet.</p>
      )}
    </div>
  );
}

export default AdminPortal;
