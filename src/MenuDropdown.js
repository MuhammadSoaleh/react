import React from 'react';

export default function MenuDropdown({ sports }) {
  return (
    <select>
      {sports.map((sport, index) => (
        <option key={index} className="dropdown-item">
          {sport}
        </option>
      ))}
    </select>
  );
}