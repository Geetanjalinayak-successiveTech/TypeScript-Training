"use client";

import { useState, useMemo } from "react";

type Employee = {
  name: string;
  salary: number;
};

export default function EmployeeSalary() {
  const empDetails: Employee[] = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 250000 },
    { name: "C", salary: 30000 },
  ];

  const [employee, setEmployee] = useState<Employee[]>(empDetails);

  const averageSalary = useMemo(() => {
    const sum = employee.reduce((total, emp) => total + emp.salary, 0);
    return sum / employee.length;
  }, [employee]);

  const updateSalary = () => {
    setEmployee((prev) =>
      prev.map((emp) => ({
        ...emp,
        salary: Math.floor(Math.random() * 500000),
      }))
    );
  };

  return (
    <main>
      <h1>Employee Salary</h1>

      <ul>
        {employee.map((emp, index) => (
          <li key={index}>
            {emp.name} : {emp.salary}
          </li>
        ))}
      </ul>

      <h4>Average Salary: {averageSalary}</h4>
      <button onClick={updateSalary}>Update Salaries</button>
    </main>
  );
}
