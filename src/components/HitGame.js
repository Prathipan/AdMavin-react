import React, { useState, useEffect } from 'react';

const HitGame = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * boxes.length);
      const updatedBoxes = [...boxes];
      updatedBoxes[randomIndex] = "Hit";
      setBoxes(updatedBoxes);

      setTimeout(() => {
        updatedBoxes[randomIndex] = '';
        setBoxes(updatedBoxes);
        // setScore(prev => prev - 2.5);
      }, 1000);
      
    }, 1000);

    setTimeout(() => clearInterval(interval), 60000);

    return () => clearInterval(interval);
  }, [boxes, score]);

  const handleClick = (index) => {
    if (boxes[index] !== '') {
      setScore(prev => prev + 5);
      const updatedBoxes = [...boxes];
      updatedBoxes[index] = '';
      setBoxes(updatedBoxes);
    } else {
      setScore(prev => prev - 2.5);
    }
  };

  return (
    <div style={{ display: 'flex',alignItems: "center",flexDirection : "column"  }}>
      <h1>Keyword Click Game</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '350px' }}>
        {boxes.map((keyword, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleClick(index)}
            style={{ border: '1px solid black', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', cursor: 'pointer' }}
          >
            {keyword}
          </div>
        ))}
      </div>
      <p>Score: {score}</p>
    </div>
  );
};

export default HitGame;
