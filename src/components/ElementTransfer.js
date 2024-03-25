import React, { useState } from "react";

const data1 = [
  { id: 1, name: "Item 1", selected: false },
  { id: 2, name: "Item 2", selected: false },
  { id: 3, name: "Item 3", selected: false },
];
const data2 = [
  { id: 4, name: "Item 4", selected: false },
  { id: 5, name: "Item 5", selected: false },
  { id: 6, name: "Item 6", selected: false },
];

const ElementTransfer = () => {
  const [bucket1, setBucket1] = useState([...data1]);
  const [bucket2, setBucket2] = useState([...data2]);

  const handleSelect = (data, num) => {
    // console.log(data, num);
    if (num === 1) {
      const updatedBucket1 = bucket1.map((obj) =>
        obj.name === data.name ? { ...obj, selected: !obj.selected } : obj
      );
      setBucket1(updatedBucket1);
    }

    if (num === 2) {
      const updatedBucket2 = bucket2.map((obj) =>
        obj.name === data.name ? { ...obj, selected: !obj.selected } : obj
      );
      setBucket2(updatedBucket2);
    }
  };

  const hadleAddtoBucket2 = () => {
    let selectedItems = bucket1
      .filter((item) => item.selected)
      .map((item) => ({ ...item, selected: false }));
    setBucket2((prevState) => [...prevState, ...selectedItems]);
    setBucket1((prevState) => prevState.filter((item) => !item.selected));
  };

  const handleRemoveFromBucket2 = () => {
    const selectedItems = bucket2
      .filter((item) => item.selected)
      .map((item) => ({ ...item, selected: false }));
    setBucket1((prevState) => [...prevState, ...selectedItems]);
    setBucket2((prevState) => prevState.filter((item) => !item.selected));
  };

  const handleAddAllToBucket2 = () => {
    setBucket2((prevState) => [...prevState, ...bucket1]);
    setBucket1([]);
  };

  const handleRemoveAllFromBucket2 = () => {
    setBucket1((prevState) => [...prevState, ...bucket2]);
    setBucket2([]);
  };

  // console.log(bucket1,bucket2);

  return (
    <div className="element-container">
      <div className="bucket">
        <h2>Bucket 1</h2>
        {bucket1.map((bucket) => {
          return (
            <span
              key={bucket.id}
              className={`${
                bucket.selected ? "bucket-name selected" : "bucket-name"
              }`}
              onClick={() => handleSelect(bucket, 1)}
            >
              {bucket.name}
            </span>
          );
        })}
      </div>
      <div className="buttons">
        <button className="button" onClick={hadleAddtoBucket2}>
          Add
        </button>
        <button className="button" onClick={handleRemoveFromBucket2}>
          Remove
        </button>
        <button className="button" onClick={handleAddAllToBucket2}>
          Add All
        </button>
        <button className="button" onClick={handleRemoveAllFromBucket2}>
          Remove All
        </button>
      </div>
      <div className="bucket">
        <h2>Bucket 2</h2>
        {bucket2.map((bucket) => {
          return (
            <span
              key={bucket.id}
              className={`${
                bucket.selected ? "bucket-name selected" : "bucket-name"
              }`}
              onClick={() => handleSelect(bucket, 2)}
            >
              {bucket.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ElementTransfer;
