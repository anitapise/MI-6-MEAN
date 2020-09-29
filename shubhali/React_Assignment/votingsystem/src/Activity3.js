import React, { Component } from "react";
import "./Activity3.css";
export function Activity3() {
  const data = [
    ["ABC", "PQR", "sham"],
    ["123", "234", "039"],
  ];
  const users = [
    {
      id: 1,
      name: "Robin Williams",
      occupation: "teacher",
    },
    {
      id: 2,
      name: "John Doe",
      occupation: "gardener",
    },
  ];
  return (
    <>
      <h4>Activity4</h4>
      <h5>Table in react.js</h5>
      <div id="table">
        <table border="1">
          <tbody>
            {data.map((numList, i) => (
              <tr key={i}>
                {numList.map((num, j) => (
                  <td key={j}>{num}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <h5>Displaying array data using list tag</h5>
      <div>
        {users.map((user) => (
          <li key={user.id}>
            <ul>{user.id}</ul>
            <ul>{user.name}</ul>
            <ul>{user.occupation}</ul>
          </li>
        ))}
      </div>
    </>
  );
}
