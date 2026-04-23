import React, { useEffect, useState } from "react";

function DoctorPortal() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error("Error fetching appointments:", err));
  }, []);

  return (
    <div>
      <h2>Doctor Portal</h2>
      <p>Here are the upcoming patient appointments:</p>
      <ul>
        {appointments.length > 0 ? (
          appointments.map((appt, index) => (
            <li key={index}>
              {appt.name} booked with Dr. {appt.doctor} on {appt.date}
            </li>
          ))
        ) : (
          <p>No appointments yet.</p>
        )}
      </ul>
    </div>
  );
}

export default DoctorPortal;
