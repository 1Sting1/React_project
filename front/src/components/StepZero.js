import React from 'react';

function StepZero({ selectSlot }) {
  const bottles = [
    { id: 1, name: 'Bottle 1', location: 'Location 1', remaining_volume: 130, slot_number: 1 },
    { id: 2, name: 'Bottle 2', location: 'Location 2', remaining_volume: 130, slot_number: 2 },
    { id: 3, name: 'Bottle 3', location: 'Location 3', remaining_volume: 130, slot_number: 3 },
    { id: 4, name: 'Bottle 4', location: 'Location 4', remaining_volume: 130, slot_number: 4 },
    { id: 5, name: 'Bottle 5', location: 'Location 5', remaining_volume: 130, slot_number: 5 },
    { id: 6, name: 'Bottle 6', location: 'Location 6', remaining_volume: 130, slot_number: 6 },
    { id: 7, name: 'Bottle 7', location: 'Location 7', remaining_volume: 130, slot_number: 7 },
    { id: 8, name: 'Bottle 8', location: 'Location 8', remaining_volume: 130, slot_number: 8 },
  ];

  return (
    <div className="step active container animate__animated animate__fadeIn">
      {bottles.map(bottle => (
        <div
          key={bottle.id}
          className="tile"
          onClick={bottle.remaining_volume >= 120 ? () => selectSlot(bottle.slot_number) : null}
          style={{ filter: bottle.remaining_volume < 120 ? 'grayscale(1)' : 'none' }}>
          <img src={`http://51.250.89.99/bottles/image/${bottle.id}/300`} alt={bottle.name} />
          <h2>{bottle.name}</h2>
          <p>{bottle.location.replace('\n', ' · ')}</p>
        </div>
      ))}
    </div>
  );
}

export default StepZero;
