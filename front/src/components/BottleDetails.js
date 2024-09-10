import React from 'react';

function BottleDetails({ selectPortion, resetProgress }) {
  return (
    <div id="step-1" className="step bottle-details">
      <img id="bottle-image" src="" alt="Bottle Image" className="bottle-image" />
      <h1 id="bottle-name" className="bottle-name"></h1>
      <p id="bottle-location" className="bottle-location"></p>
      <p id="bottle-description" className="bottle-description"></p>
      <div className="buttons">
        <button className="button btn btn-primary" onClick={() => selectPortion('small')}>Тестовая порция</button>
        <button className="button btn btn-secondary" onClick={() => selectPortion('big')}>Полная порция</button>
        <button className="button btn btn-link" onClick={resetProgress}>Назад</button>
      </div>
    </div>
  );
}

export default BottleDetails;
