import React, {  useState } from 'react'

const SplitBox = () => {
    const [squares, setSquares] = useState([{ id: 1, size: 400 }]); 

    const handleSquareClick = (id) => {
      const clickedSquareIndex = squares.findIndex(square => square.id === id);
      const clickedSquare = squares[clickedSquareIndex];

      const newSquares = squares.map(square => {
        if (square.id === id) {
          const newSize = square.size / 2;
          return [
            { id: square.id * 10 + 1, size: newSize },
            { id: square.id * 10 + 2, size: newSize },
            { id: square.id * 10 + 3, size: newSize },
            { id: square.id * 10 + 4, size: newSize }
          ];
        } else {
          return square;
        }
      }).flat();
     
      setSquares(newSquares)
    };

    console.log(squares)
  
    return (
      <div style={{ width: '400px', height: '400px', border: '1px solid black', position: 'relative' }}>
        {squares.map(square => (
          <div
            key={square.id}
            style={{
              position: 'absolute',
              width: `${square.size}px`,
              height: `${square.size}px`,
              border: '1px solid black',
              cursor: 'pointer'
            }}
            onClick={() => handleSquareClick(square.id)}
          ></div>
        ))}
      </div>
    );
}

export default SplitBox