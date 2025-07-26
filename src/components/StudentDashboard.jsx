import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "../App.css";

export default function StudentDashboard() {
  const studentsData = [
    { name: "John Doe", grade: "A", attendance: 80 },
    { name: "Jane Smith", grade: "B", attendance: 72 },
    { name: "Michael Lee", grade: "A+", attendance: 90 },
    { name: "Sara Khan", grade: "C", attendance: 60 },
  ];

  const [showFiltered, setShowFiltered] = useState(false);

  const filteredStudents = studentsData.filter(
    (student) => student.attendance > 75
  );

  const studentsToShow = showFiltered ? filteredStudents : studentsData;

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <p>Total Students: {studentsToShow.length}</p>

      <button
        className="toggle-btn"
        onClick={() => setShowFiltered(!showFiltered)}
      >
        {showFiltered ? "Show All Students" : "Show >75% Attendance"}
      </button>

      <div className="student-list">
        {studentsToShow.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            grade={student.grade}
            attendance={student.attendance}
          />
        ))}
      </div>
    </div>
  );
}
