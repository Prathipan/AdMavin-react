import React, { useState } from "react";
import NestedList from "./NestedList";

const nestedData = [
  {
    id: 1,
    name: "Root 1",
    children: [
      {
        id: 2,
        name: "Child 1.1",
        children: [
          { id: 11, name: "Sub-Child 1.1.1" },
          { id: 12, name: "Sub-Child 1.1.2" },
        ],
      },
      {
        id: 3,
        name: "Child 1.2",
        children: [
          { id: 13, name: "Sub-child 1.2.1" },
          { id: 14, name: "Sub-child 1.2.2" },
        ],
      },
      {
        id: 4,
        name: "Child 1.3",
        children: [
          { id: 15, name: "Sub-Child 1.3.1" },
          { id: 16, name: "Sub-Child 1.3.2" },
        ],
      },
      {
        id: 5,
        name: "Child 1.4",
        children: [
          { id: 17, name: "Sub-child 1.4.1" },
          { id: 18, name: "Sub-child 1.4.2" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Root 2",
    children: [
      {
        id: 7,
        name: "Child 2.1",
        children: [
          { id: 19, name: "Sub-Child 2.1.1" },
          { id: 20, name: "Sub-Child 2.1.2" },
        ],
      },
      {
        id: 8,
        name: "Child 2.2",
        children: [
          { id: 21, name: "Sub-child 2.2.1" },
          { id: 22, name: "Sub-child 2.2.2" },
        ],
      },
      {
        id: 9,
        name: "Child 2.3",
        children: [
          { id: 23, name: "Sub-Child 2.3.1" },
          { id: 24, name: "Sub-Child 2.3.2" },
        ],
      },
      {
        id: 10,
        name: "Child 2.4",
        children: [
          { id: 25, name: "Sub-child 2.4.1" },
          { id: 26, name: "Sub-child 2.4.2" },
        ],
      },
    ],
  },
];

const List = () => {
  const [selectedRoot, setSelectedRoot] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

  const handleRootItemClick = (id) => {
    setSelectedRoot(id);
    setSelectedChild(null); 
  };

  const handleChildItemClick = (id) => {
    setSelectedChild(id);
  };

  console.log(selectedRoot,selectedChild)

  return (
    <div className="pane-container">
      <div className="pane">
        <NestedList data={nestedData} onItemClick={handleRootItemClick} />
      </div>

      {selectedRoot !== null && (
        <div className="pane">
          <NestedList
            data={nestedData.find((item) => item.id === selectedRoot).children}
            onItemClick={handleChildItemClick}
          />
        </div>
      )}

      {selectedChild !== null && (
        <div className="pane">
          <NestedList
            data={nestedData
              .find((item) => item.id === selectedRoot)
              .children.find((child) => child.id === selectedChild)
              .children}
            onItemClick={() => {}} 
          />
        </div>
      )}
    </div>
  );
};

export default List;
