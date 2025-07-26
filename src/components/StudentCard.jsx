import React from "react";
import "../App.css";

export default function StudentCard({ name, grade, attendance }) {
  const highlightClass = grade === "A" || grade === "A+" ? "highlight" : "";

  return (
    <div className={`student-card ${highlightClass}`}>
      <h3>{name}</h3>
      <p>Grade: {grade}</p>
      <p>Attendance: {attendance}%</p>
    </div>
  );
}
