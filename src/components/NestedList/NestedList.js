import React, { useState } from "react";

const NestedList = ({ data, onItemClick }) => {
  
//   console.log(data);

  const handleItemClick = (id) => {
    onItemClick(id);
  };

  return (
    <ul className="list-ul">
      {data.map((item) => (
        <li key={item.id}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(item.id)}
          >
             📁{item.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NestedList;
