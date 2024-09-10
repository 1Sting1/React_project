import React from 'react';

function ButtonStep() {
  return (
    <div id="step-3" className="step">
      <h2>Нажмите подсвеченную кнопку для завершения операции</h2>
      <button id="complete-button" className="button btn btn-success">Завершить операцию</button>
    </div>
  );
}

export default ButtonStep;
