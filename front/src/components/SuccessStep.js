import React from 'react';

function SuccessStep({ resetProgress }) {
  return (
    <div id="step-4" className="step">
      <h2>Операция успешно выполнена!</h2>
      <button className="button btn btn-info" onClick={resetProgress}>Вернуться в главное меню</button>
    </div>
  );
}

export default SuccessStep;
