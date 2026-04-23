import React, { useState } from "react";

function PatientPortal() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    doctor: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Patient Portal</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="text" name="doctor" placeholder="Doctor's Name" onChange={handleChange} required />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default PatientPortal;
